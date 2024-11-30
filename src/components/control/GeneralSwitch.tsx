import React from 'react'
import {useState} from 'react';
import "../../css/control/GeneralSwitch.css";

interface Props {
    children1: React.ReactNode;
    children2: React.ReactNode;
    state1: string;
    state2: string;
}

function GeneralSwitch({children1, children2, state1, state2}: Props) {
    const [state, setState] = useState(state1);

    function switchState() {
        setState(state === state1 ? state2 : state1);
    }

    return (
        <div>
            <div className={'switch'} onClick={switchState}>
                <div className={`state1 ${state === state1 ? 'active' : ''}`}>{state1}</div>
                <div className={`state1 ${state === state2 ? 'active' : ''}`}>{state2}</div>
            </div>
            {state === state1 ? children1 : children2}

        </div>
    );
}

export default GeneralSwitch;
