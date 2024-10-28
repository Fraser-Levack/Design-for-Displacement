import '../css/app.css';
import '../css/MainAnimation.css';
import useIntersectionObserver from '../useIntersectionObserver';

interface Props {
    source: string;
    altText: string;
    direction: 'left' | 'right';
    span: [number, number];
}


function Image ({ source, altText, direction, span }: Props) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLImageElement>({ threshold: 0.05 });

    return (
        <>
            <img ref={ref} className={`react-image reveal-${direction} ${isIntersecting ? `reveal-${direction}-active` : ''}`}
                style={{gridColumnStart: span[0], gridColumnEnd: span[1]}}
                src = {source}
                alt = {altText}
            />
        </>
    )
}

export default Image;