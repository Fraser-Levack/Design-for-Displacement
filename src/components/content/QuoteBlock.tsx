import React from "react";
import "../../css/content/QuoteBlock.css";

interface Props {
    children: React.ReactNode;
    source?: string;
    lightText?: boolean;
}

function QuoteBlock({children, source, lightText=false}: Props) {

    const lightTextStyle = {color: "var(--background-color)"};

    const quoteIcon = !lightText ? <img src="/icons/quote.svg" alt="Quote Icon" width={"40rem"} height={"40rem"}/> : null;

    return (
        <div className={"quote-block"} style={lightText ? lightTextStyle : {}}>
            <div className={"quote-icon"}>
                {quoteIcon}
            </div>
            <div className={"quote-text"}>
                {children}
            </div>
            <div className={"quote-src"}>
                -{source}
            </div>
        </div>
    );
}

export default QuoteBlock;