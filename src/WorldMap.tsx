import { ComposableMap, Geographies, Geography , ZoomableGroup} from "react-simple-maps"
import { useState } from "react";
import "./css/WorldMap.css"

interface GeographyType {
    rsmKey: string;
}

interface Props {
    fill : string;
    stroke : string;
}


function WorldMap ({fill, stroke} : Props) {

    const [position, setPosition] = useState({ coordinates: [50, 25], zoom: 1 , translateExtent: [[0, 0], [0, 0]]});

    // high definition map
    const geoUrl =
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

    // low def on this link
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json

    function handleZoom() {
        const coords = [50,25];
        const zoomMultiplier = 2;
        if (position.zoom > 1) {
            return setPosition({ coordinates: coords, zoom: 1 , translateExtent: [[0, 0], [0, 0]]});
        }
        const zoom = position.zoom * zoomMultiplier;
        setPosition({ coordinates: coords, zoom: zoom, translateExtent: [[0, 0], [0, 0]]});
    }

    return (
        <ComposableMap className="world-map" onClick={handleZoom}>
          <ZoomableGroup zoom={position.zoom}
                         center={position.coordinates}
                         disablePanning={true}
                         transitionDuration={800}
          >

          <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: GeographyType[] }) =>
                  geographies.map((geo: GeographyType) => (
                      <Geography key={geo.rsmKey}
                                 geography={geo}
                                 fill={fill}
                                 stroke={stroke}
                      />
                  ))
              }
          </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    );
}

export default WorldMap;