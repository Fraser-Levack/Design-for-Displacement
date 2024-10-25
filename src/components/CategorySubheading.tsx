import '../css/App.css';
import '../css/MainAnimation.css';

interface Props {
    children: string;
}

function TextBox({ children}: Props) {

    return (
        <p className="react-category-sub">
            {children}
        </p>
    );
}

export default TextBox;