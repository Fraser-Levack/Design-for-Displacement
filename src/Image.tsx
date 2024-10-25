import './css/app.css';
import './css/MainAnimation.css';
import useIntersectionObserver from './useIntersectionObserver';

interface Props {
    source: string;
    altText: string;
    direction: 'left' | 'right';
}


function Image ({ source, altText, direction }: Props) {
    const [ref, isIntersecting] = useIntersectionObserver<HTMLImageElement>({ threshold: 0.1 });

    return (
        <>
            <img ref={ref} className={`react-image reveal-${direction} ${isIntersecting ? `reveal-${direction}-active` : ''}`}
                 src = {source}
                 alt = {altText}/>
        </>
    )
}

export default Image;