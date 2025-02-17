// src/components/admin/InputBlock.tsx
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { readAllBlocks, insertBlockData } from '../../firebase';

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

const InputBlock: React.FC<InfoBlockProps> = ({ blockPath = "blocks/macro/" }) => {
    const [blocks, setBlocks] = useState<BlockData[]>([]);

    useEffect(() => {
        readAllBlocks((data: BlockData[]) => {
            setBlocks(data);
        }, blockPath);
    }, [blockPath]);

    const handleBlockInsert = (blockId: number, blockContent: string = 'Enter Block data here...'): void => {
        insertBlockData(blockId + 1, blockContent, blockPath);
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Block Profile</h1>
            <div className="mb-4">
                {blocks.length > 0 ? (
                    blocks.map((block: BlockData) => (

                        <div key={block.id}>
                            <ContentEdit blockId={block.id} blockContent={block.content} blockPath={blockPath}/>
                            <img src='/icons/plus-circle.svg' alt={'add'} className={'add-btn'} onClick={() => handleBlockInsert(block.id)}/>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default InputBlock;