// info block for four columns
import React from 'react';
import '../../css/content/FourBlock.css';

interface Props {
    children?: React.ReactNode;
}

function FourBlock ({ children }: Props) {
    return (
        <div className="four-block">
            {children}
        </div>
    )
}

export default FourBlock;