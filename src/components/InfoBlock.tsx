import "../css/App.css";
import "../css/InfoBlock.css";
import React from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    span?: number[];
    columns?: number;
}

function InfoBlock({children, title, span, columns = 1}: Props) {
    const infoTextStyle = {
        display: 'grid',
        gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr',
        gap: '1rem'
    };

    return (
        <div className={"info-block"}>

            <div className={"info-text-section"} style={{width: span ? `${span[0]}%` : '50%'}}>
                <h2>{title}</h2>
                <div className={"info-text"} style={infoTextStyle}>
                    {children}
                </div>
            </div>

            <div className={"info-image-section"} style={{width: span ? `${span[1]}%` : '40%'}}>

            </div>
        </div>
    );
}

export default InfoBlock;