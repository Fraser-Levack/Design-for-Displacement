import { ComposableMap, Geographies, Geography} from "react-simple-maps"
//import { useState } from "react";
import "./css/WorldMap.css"
import "./css/App.css"
import MainHeading from "./MainHeading.tsx";

interface GeographyType {
    rsmKey: string;
}

interface Props {
    fill : string;
    stroke : string;
}


function WorldMap ({fill, stroke} : Props) {

    // high definition map
    const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

        //"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

    // low def on this link

    return (
        <>
        <MainHeading>Design for Displacement</MainHeading>
        <MainHeading isSubheading={true}>A project by Dundee Uni</MainHeading>
        <ComposableMap className="world-map react-map" viewBox="0 0 850 600">

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
        </>
    );
}

export default WorldMap;