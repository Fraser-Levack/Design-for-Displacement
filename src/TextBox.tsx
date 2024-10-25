import './css/TextBox.css';
import './css/App.css';

interface Props {
    children: string;
}

function TextBox ({ children } : Props) {
    return (
        <>
            <p className="react-text-box">{children}</p>
        </>
    )
}

export default TextBox;