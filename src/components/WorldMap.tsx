import { ComposableMap, Geographies, Geography} from "react-simple-maps";
import { useEffect, useState } from "react";
import "../css/WorldMap.css"
import "../css/App.css"

interface GeographyType {
    rsmKey: string;
}

interface Props {
    fill : string;
    stroke : string;
    isActive?: boolean;
}


function WorldMap({ fill, stroke, isActive }: Props) {
    const [viewBox, setViewBox] = useState("0 0 850 600");
    const desiredViewBox = {left:0, up:0, width: 113, height: 75};

    useEffect(() => {

        if (isActive) {
            let currentViewBox = { left:0, up:0, width: 850, height: 600 };
             const interval = setInterval(() => {
                if (currentViewBox.width > desiredViewBox.width && currentViewBox.height > desiredViewBox.height) {
                    currentViewBox = {
                        width: currentViewBox.width - 10,
                        height: currentViewBox.height - 10,
                        left: currentViewBox.left + 4,
                        up: currentViewBox.up + 3
                    };
                    setViewBox(`${currentViewBox.left} ${currentViewBox.up} ${currentViewBox.width} ${currentViewBox.height}`);
                } else {
                    clearInterval(interval);
                }
            }, 25);
             return () => clearInterval(interval); // Adjust the interval time as needed
        } else {
            setViewBox("0 0 850 600");
        }
    }, [isActive, desiredViewBox.height, desiredViewBox.width]);

    return (
        <div className="map-container react-map">
            <ComposableMap
                className={`world-map`}
                viewBox={viewBox}
            >
                <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({geographies}: { geographies: GeographyType[] }) =>
                        geographies.map((geo: GeographyType) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={fill}
                                stroke={stroke}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
}

export default WorldMap;