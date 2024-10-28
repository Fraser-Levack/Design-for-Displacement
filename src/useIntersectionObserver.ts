import { useEffect, useRef, useState, RefObject } from 'react';

const useIntersectionObserver = <T extends HTMLElement>(options: IntersectionObserverInit): [RefObject<T>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
};

export default useIntersectionObserver;