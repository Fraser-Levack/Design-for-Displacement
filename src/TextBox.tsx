import './css/TextBox.css';
import './css/App.css';
import './css/MainAnimation.css';
import useIntersectionObserver from './useIntersectionObserver';

interface Props {
    children: string;
    direction: 'left' | 'right';
}

function TextBox({ children , direction}: Props) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 });

    return (
        <p ref={ref} className={`react-text-box reveal-${direction} ${isIntersecting ? `reveal-${direction}-active` : ''}`}>
            {children}
        </p>
    );
}

export default TextBox;