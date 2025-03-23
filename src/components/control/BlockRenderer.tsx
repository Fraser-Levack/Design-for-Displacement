// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { readAllBlocks } from '../../firebase';
import {useEffect, useState} from "react";
import InfoBlock from "../content/InfoBlock.tsx";
import FourBlock from "../content/FourBlock.tsx";
import Image from "../content/Image.tsx";
import QuoteBlock from "../content/QuoteBlock.tsx";
import StatBlock from "../content/StatBlock.tsx";
import GeneralSwitch from "../control/GeneralSwitch.tsx";
import CongoCaseStudy from "../content/CongoCaseStudy.tsx";
import JSXParser from "react-jsx-parser";

interface props {
    blockPath?: string;
}

interface BlockData {
    id: number;
    content: string;
}

function BlockRenderer ({blockPath}: props) {
    const [blocks, setBlocks] = useState<BlockData[]>([]);

    useEffect(() => {
        readAllBlocks((data: BlockData[]) => {
            setBlocks(data);
        }, blockPath);
    }, [blockPath]);

    return (
        <div>
            {blocks.length > 0 ? (
                blocks.map((block: BlockData) => (

                    <div key={block.id}>
                        <JSXParser
                            components={{InfoBlock, Image, FourBlock, QuoteBlock, StatBlock, GeneralSwitch, CongoCaseStudy}}
                            jsx={block.content}
                        />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default BlockRenderer ;