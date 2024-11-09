// import { useState } from 'react';
import NavBar from "./components/NavBar.tsx";
import WorldGlobe from "./components/WorldGlobe.tsx";

import StickyBar from "./components/StickyBar.tsx";

import InfoBlock from "./components/InfoBlock.tsx";
// import Image from "./components/Image.tsx";
//import TextBox from "./components/TextBox.tsx";
// import CategorySubheading from "./components/CategorySubheading.tsx";

import './css/App.css';

function App() {

  return (
  <div className={"page-content"}>
    <div className={"main-heading"}>
        <NavBar />
    </div>
    <div className="page-content">
    <div className="map-content">
        <WorldGlobe color={'#bfbfbf'}/>
    </div>
    < StickyBar />

      <InfoBlock title={"Psychosocial Impact"} span={[40, 50]} columns={2}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Gustaria
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </InfoBlock>


    </div>
  </div>
  );
}

export default App;