import { useEffect, useState } from 'react';
import JSXParser from 'react-jsx-parser';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { writeBlockData, readAllBlocks } from '../../firebase';
import InfoBlock from '../content/InfoBlock.tsx';
import Image from "../content/Image.tsx";

interface BlockData {
    id: number;
    content: string;
}

function InputBlock() {
    const [blockId, setBlockId] = useState<number>(0);
    const [blocks, setBlocks] = useState<BlockData[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        readAllBlocks((data: BlockData[]) => {
            setBlocks(data);
            const maxId = data.reduce((max, block) => (block.id > max ? block.id : max), 0);
            setBlockId(maxId + 1);
        });
    }, []);

    const handleSave = () => {
        writeBlockData(blockId, content);
        setBlockId(prevBlockId => prevBlockId + 1); // Increment blockId
        setContent(''); // Clear the input field
    };

    return (
        <div>
            <h1>Block Profile</h1>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter block content"
                rows={10}
                cols={50}
            />
            <button onClick={handleSave}>Save Block Data</button>
            <div>
                {blocks.length > 0 ? (
                    blocks.map((block: BlockData) => (
                        <div key={block.id}>
                            <p>Block ID: {block.id}</p>
                            <JSXParser
                                components={{ InfoBlock, Image }}
                                jsx={block.content}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default InputBlock;