import { useLayoutEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

const WorldGlobe = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '50rem'}}>
            <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                width={dimensions.width}
                height={dimensions.height}
            />
        </div>
    );
};

export default WorldGlobe;