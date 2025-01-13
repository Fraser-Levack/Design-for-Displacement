import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { writeBlockData, readAllBlocks } from '../../firebase';

interface BlockData {
    id: number;
    content: string;
}

function InputBlock() {
    const [blockId, setBlockId] = useState<number>(0);
    const [blocks, setBlocks] = useState<BlockData[]>([]);

    useEffect(() => {
        readAllBlocks((data: BlockData[]) => {
            setBlocks(data);
            const maxId = data.reduce((max, block) => (block.id > max ? block.id : max), 0);
            setBlockId(maxId + 1);
        });
    }, []);

    const handleSave = () => {
        writeBlockData(blockId, 'John Doe');
        setBlockId(prevBlockId => prevBlockId + 1); // Increment blockId
    };

    return (
        <div>
            <h1>data</h1>
            {blocks.length > 0 ? (
                blocks.map((block: BlockData) => (
                    <div key={block.id}>
                        <p>Block ID: {block.id}</p>
                        <p>Data: {block.content}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleSave}>Save User Data</button>
        </div>
    );
}

export default InputBlock;