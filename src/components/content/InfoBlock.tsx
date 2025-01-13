import "../../css/App.css";
import "../../css/content/InfoBlock.css";
import React from "react";

interface Props {
    children?: React.ReactNode;
    title?: string;
    span?: number[];
    columns?: number;
    flip?: boolean;
    id?: string;
    image_child?: React.ReactNode;
}

function InfoBlock({children, title, span, columns = 1, flip = false, id = "", image_child}: Props) {
    const infoTextStyle = {
        display: 'grid',
        gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr',
        gap: '0'
    };

    const titleContent = title && title.trim() !== "" ? <h2>{title}</h2> : null;

    return (
        <div className={"info-block"} id={id}>

            {flip ? (
                <>
                    <div className={"info-image-section"} style={{width: span ? `${span[1]}%` : '40%'}}>
                        {image_child}
                    </div>
                    <div className={"info-text-section"} style={{width: span ? `${span[0]}%` : '50%'}}>
                        {titleContent}
                        <div className={"info-text"} style={infoTextStyle}>
                            {children}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={"info-text-section"} style={{width: span ? `${span[0]}%` : '50%'}}>
                        {titleContent}
                        <div className={"info-text"} style={infoTextStyle}>
                            {children}
                        </div>
                    </div>
                    <div className={"info-image-section"} style={{width: span ? `${span[1]}%` : '40%'}}>
                        {image_child}
                    </div>
                </>
            )}
        </div>
    );
}

export default InfoBlock;