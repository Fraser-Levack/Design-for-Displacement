import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import { Feature, FeatureCollection, Geometry } from 'geojson';

interface props {
    color: string;
}

const WorldGlobe = ({color}: props) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [landPolygons, setLandPolygons] = useState<Feature<Geometry>[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const globeRef = useRef<GlobeMethods | undefined>(undefined);

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

    useEffect(() => {
        // Fetch and process land data
        fetch('//unpkg.com/world-atlas/land-110m.json')
            .then((res) => res.json())
            .then((landTopo) => {
                const landFeatures = topojson.feature(landTopo, landTopo.objects.land) as unknown as FeatureCollection<Geometry>;
                setLandPolygons(landFeatures.features);
            });
    }, []);

    useEffect(() => {
        const animate = () => {
            if (globeRef.current) {
                const controls = globeRef.current.controls();
                controls.autoRotate = true;
                controls.autoRotateSpeed = 1; // Adjust speed as needed


                // Set zoom level
                controls.minDistance = 250; // Minimum zoom distance
                controls.maxDistance = 1000; // Maximum zoom distance
                controls.update();

                // Set initial zoom level by adjusting camera position
                const camera = globeRef.current.camera();
                camera.position.z = 250; // Adjust this value to zoom in or out

                controls.enabled = false; // Disable user controls
            }
        };

        animate();
    }, []);

    const polygonsMaterial = new THREE.MeshLambertMaterial({
        color: color,
        side: THREE.DoubleSide,
    });

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '25rem' }}>
            <Globe
                ref={globeRef}
                backgroundColor="rgba(0,0,0,0)"  // Transparent background
                showGlobe={false}                // Hide globe mesh
                showAtmosphere={false}           // Hide atmosphere
                polygonsData={landPolygons}      // Set polygon data for land
                polygonCapMaterial={polygonsMaterial} // Set land color material
                polygonSideColor={() => 'rgba(0, 0, 0, 0)'} // Transparent polygon sides
                width={dimensions.width}
                height={dimensions.height}
                enablePointerInteraction={false} // Disable mouse interaction

            />
        </div>
    );
};

export default WorldGlobe;