declare module '../firebase' {
    export function writeBlockData(blockId: string, content: string): void;
    export function readBlockData(blockId: string, callback: (data: { id: number; content : string;}) => void): void;
    export function readAllBlocks(callback: (data: { [key: string]: { id: number; content: string; }; }) => void): void;
}