import React from 'react';
import "../../css/content/StatBlock.css";

interface Props {
    title: string;
    stat1: React.ReactNode;
    stat2: React.ReactNode;
    stat3: React.ReactNode;
}

function StatBlock({title, stat1, stat2, stat3}: Props) {
    return (
        <div className={"stat-block"}>
            <h2>{title}</h2>
            <div className={"stats"}>
                <div className={"stat"}>
                    {stat1}
                </div>
                <div className={"stat"}>
                    {stat2}
                </div>
                <div className={"stat"}>
                    {stat3}
                </div>
            </div>
        </div>
    );
}

export default StatBlock;