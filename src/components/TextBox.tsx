import '../css/TextBox.css';
import '../css/App.css';
import '../css/MainAnimation.css';
import useIntersectionObserver from '../useIntersectionObserver.ts';

interface Props {
    children: string;
    direction: 'left' | 'right';
    span: [number, number];
}

function TextBox({ children , direction, span}: Props) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.05 });

    return (
        <p ref={ref} className={`react-text-box reveal-${direction} ${isIntersecting ? `reveal-${direction}-active` : ''}`}
            style={{gridColumnStart: span[0], gridColumnEnd: span[1]}}>
            {children}
        </p>
    );
}

export default TextBox;