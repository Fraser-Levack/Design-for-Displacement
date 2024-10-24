import { ComposableMap, Geographies, Geography } from "react-simple-maps"

interface GeographyType {
    rsmKey: string;
    // Add other properties as needed
}


function WorldMap () {

    const geoUrl =
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

  return (
      <ComposableMap>
          <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: GeographyType[] }) =>
                  geographies.map((geo: GeographyType) => (
                      <Geography key={geo.rsmKey} geography={geo} />
                  ))
              }
          </Geographies>
      </ComposableMap>
  );
}

export default WorldMap;