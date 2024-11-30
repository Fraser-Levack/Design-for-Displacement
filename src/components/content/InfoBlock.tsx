import "../../css/App.css";
import "../../css/content/InfoBlock.css";
import Image from "./Image.tsx";
import React from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    span?: number[];
    columns?: number;
    id?: string;
    image_src?: string;
}

function InfoBlock({children, title, span, columns = 1, id = "", image_src}: Props) {
    const infoTextStyle = {
        display: 'grid',
        gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr',
        gap: '0'
    };

    return (
        <div className={"info-block"} id={id}>

            <div className={"info-text-section"} style={{width: span ? `${span[0]}%` : '50%'}}>
                <h2>{title}</h2>
                <div className={"info-text"} style={infoTextStyle}>
                    {children}
                </div>
            </div>

            <div className={"info-image-section"} style={{width: span ? `${span[1]}%` : '40%'}}>
                {image_src ? <Image source={image_src}/> : null}
            </div>
        </div>
    );
}

export default InfoBlock;