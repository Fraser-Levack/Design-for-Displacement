import React from 'react';
import "../../css/content/StatBlock.css";

interface Props {
    stat1?: React.ReactNode;
    stat2?: React.ReactNode;
    stat3?: React.ReactNode;
    stat4?: React.ReactNode;
}

function StatBlock({stat1, stat2, stat3, stat4}: Props) {

    const noBoarderStyle = { border: "none" };
    const lightText = { color: "var(--background-color)"};

    return (
        <div className={"stat-block four"} style={lightText}>
            <div className={"stats"}>
                <div className={"stat-four"}>
                    {stat1}
                </div>
                <div className={"stat-four"} style={noBoarderStyle}>
                    {stat2}
                </div>
                <div className={"stat-four"}>
                    {stat3}
                </div>
                <div className={"stat-four"}>
                    {stat4}
                </div>
            </div>
        </div>
    );
}

export default StatBlock;