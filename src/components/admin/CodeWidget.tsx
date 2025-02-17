import { useState } from 'react';
import { Editor } from "@monaco-editor/react";

interface props {
    editable?: boolean;
    initialValue?: string;
    onValueChange?: (value: string) => void;
}

function CodeWidget ({ editable = true, initialValue = 'Enter Here!', onValueChange }:props) {
    const [value, setValue] = useState<string>(initialValue);

    return (
        <div>
            <Editor
                height="20rem"
                defaultLanguage="html"
                defaultValue={initialValue}
                theme="vs-dark"
                value={value}
                onChange={(newValue) => {
                    const updatedValue = newValue || '';
                    setValue(updatedValue);
                    if (onValueChange) {
                        onValueChange(updatedValue);
                    }
                }}
                options={{readOnly: !editable}}
            />
        </div>
    );
}

export default CodeWidget;