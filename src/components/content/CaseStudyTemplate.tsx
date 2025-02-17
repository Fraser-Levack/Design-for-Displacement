import React from 'react';
import {useState} from "react";
import "../../css/content/CaseStudyTemplate.css";

interface Props {
    child1: React.ReactNode;
    child2: React.ReactNode;
    child3: React.ReactNode;
    child4: React.ReactNode;
    child5: React.ReactNode;
}

function CaseStudyTemplate({child1, child2, child3, child4, child5}: Props) {
    const [state, setState] = useState(1);

    const handleClick = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setState(state === 1 ? 5 : state - 1);
        } else {
            setState(state === 5 ? 1 : state + 1);
        }
    };

    const renderChild = () => {
        switch (state) {
            case 1:
                return child1;
            case 2:
                return child2;
            case 3:
                return child3;
            case 4:
                return child4;
            case 5:
                return child5;
            default:
                return null;
        }
    };

    return (
        <div className={"case-study-template"}>
            <div className={"arrow-left"} onClick={() => handleClick("left")}>{'<'}</div>
            <div className={"case-study-content"}>
            {renderChild()}
            </div>
            <div className={"arrow-right"} onClick={() => handleClick("right")}>{'>'}</div>
        </div>
    );
}

export default CaseStudyTemplate;
