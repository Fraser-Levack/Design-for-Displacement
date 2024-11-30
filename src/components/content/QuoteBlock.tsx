import React from "react";
import "../../css/content/QuoteBlock.css";

interface Props {
    children: React.ReactNode;
    source?: string;
}

function QuoteBlock({children, source}: Props) {
    return (
        <div className={"quote-block"}>
            <div className={"quote-icon"}><img src="/icons/quote.svg"
                                               alt="Quote Icon"
                                               width={"40rem"}
                                               height={"40rem"}/>
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