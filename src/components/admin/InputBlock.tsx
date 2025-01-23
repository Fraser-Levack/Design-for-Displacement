// src/components/admin/InputBlock.tsx
import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { readAllBlocks, writeBlockData } from '../../firebase';

import '../../css/admin/InputBlock.css';
import './ContentEdit.tsx'
import ContentEdit from "./ContentEdit.tsx";

interface InfoBlockProps {
    blockPath?: string;
}

interface BlockData {
    id: number;
    content: string;
}

// Event type for contentEditable div
type ContentEditableEvent = React.FormEvent<HTMLDivElement> & {
    currentTarget: HTMLDivElement;
};

const InputBlock: React.FC<InfoBlockProps> = ({ blockPath = "blocks/macro/" }) => {
    const [blockId, setBlockId] = useState<number>(0);
    const [blocks, setBlocks] = useState<BlockData[]>([]);
    const [content, setContent] = useState<string>('');
    const editorRef = useRef<HTMLDivElement>(null);
    const lastCursorPosition = useRef<number>(0);

    useEffect(() => {
        readAllBlocks((data: BlockData[]) => {
            setBlocks(data);
            const maxId = data.reduce((max, block) => (block.id > max ? block.id : max), 0);
            setBlockId(maxId + 1);
        }, blockPath);
    }, [blockPath]);

    const highlightHTMLTags = (text: string): string => {
        const escapedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return escapedText.replace(/(&lt;\/?[\w-]+(?:\s+[^&gt;]*)?&gt;)/g,
            (match) => `<span class="highlight">${match}</span>`
        );
    };

    const saveSelection = (): void => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0 && editorRef.current) {
            const range = selection.getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(editorRef.current);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            lastCursorPosition.current = preCaretRange.toString().length;
        }
    };

    const restoreSelection = (): void => {
        const editableDiv = editorRef.current;
        if (!editableDiv) return;

        const selection = window.getSelection();
        if (!selection) return;

        const range = document.createRange();
        let currentLength = 0;
        let targetNode: Node | null = null;
        let targetOffset = 0;

        const findTextNode = (node: Node): boolean => {
            if (node.nodeType === Node.TEXT_NODE) {
                const nodeLength = node.textContent?.length || 0;
                if (currentLength + nodeLength >= lastCursorPosition.current) {
                    targetNode = node;
                    targetOffset = lastCursorPosition.current - currentLength;
                    return true;
                }
                currentLength += nodeLength;
            } else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    if (findTextNode(node.childNodes[i])) {
                        return true;
                    }
                }
            }
            return false;
        };

        findTextNode(editableDiv);

        if (targetNode) {
            range.setStart(targetNode, targetOffset);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    const handleInput = (e: ContentEditableEvent): void => {
        saveSelection();
        const newContent = e.currentTarget.innerText;
        setContent(newContent);

        requestAnimationFrame(() => {
            if (editorRef.current) {
                editorRef.current.innerHTML = highlightHTMLTags(newContent);
                restoreSelection();
            }
        });
    };

    const handleSave = (): void => {
        if (content.trim()) {
            writeBlockData(blockId, content, blockPath);
            setBlockId(prev => prev);
            setContent('');
            if (editorRef.current) {
                editorRef.current.innerHTML = '';
            }
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Block Profile</h1>
            <div className="mb-4">
                {blocks.length > 0 ? (
                    blocks.map((block: BlockData) => (
                        <div key={block.id}>
                            <ContentEdit blockId={block.id} blockContent={block.content} blockPath={blockPath}/>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                className="editable"
                dangerouslySetInnerHTML={{ __html: highlightHTMLTags(content) }}
            />

            <button
                onClick={handleSave}
                type="button"
            >
                Save Block Data
            </button>
        </div>
    );
};

export default InputBlock;