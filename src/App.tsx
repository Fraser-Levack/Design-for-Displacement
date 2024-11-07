// import { useState } from 'react';
import NavBar from "./components/NavBar.tsx";
// import MainHeading from './components/MainHeading.tsx';
import WorldGlobe from "./components/WorldGlobe.tsx";

import StickyBar from "./components/StickyBar.tsx";
// import Image from "./components/Image.tsx";
import TextBox from "./components/TextBox.tsx";
// import CategorySubheading from "./components/CategorySubheading.tsx";

import './css/App.css';

function App() {

  return (
  <div className={"page-content"}>
    <div className={"main-heading"}>
        <NavBar />
    </div>
    <div className="page-content">
    <div className="map-content react-map">
        <WorldGlobe color={'#7782b4'}/>
    </div>
    < StickyBar />
    <div className="main-content">
      <TextBox direction={"left"} span={[1,3]}>
        new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text</TextBox>

      <TextBox direction={"left"} span={[1,3]}>
        new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text</TextBox>

      <TextBox direction={"left"} span={[1,3]}>
        new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text new lots text new lots text new lots text new lots text
        new lots text new lots text new lots text new lots text</TextBox>
    </div>

    </div>

  </div>
  );
}

export default App;