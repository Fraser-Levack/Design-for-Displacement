import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import "./css/WorldMap.css"

interface GeographyType {
    rsmKey: string;
    // Add other properties as needed
}

interface Props {
    fill : string;
    stroke : string;
}


function WorldMap ({fill, stroke} : Props) {

    // high definition map
    const geoUrl =
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

    // low def on this link
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json

  return (
      <ComposableMap className="world-map">
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
      </ComposableMap>
  );
}

export default WorldMap;