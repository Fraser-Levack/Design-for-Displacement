import "../css/App.css";
import "../css/InfoBlock.css";
import React from "react";

interface Props {
    children: React.ReactNode;
    title: string;
}

function InfoBlock({children, title}: Props) {
    return (
        <div className={"info-block"}>
            <div className={"info-text-section"}>
                <h2>{title}</h2>
                <p>
                    {children}
                </p>
            </div>
            <div className={"info-image-section"}>

            </div>
        </div>
    );
}

export default InfoBlock;