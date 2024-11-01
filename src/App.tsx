import { useState } from 'react';
import MainHeading from './components/MainHeading.tsx';
// import WorldMap from "./components/WorldMap.tsx";
import WorldGlobe from "./components/WorldGlobe.tsx";
import Image from "./components/Image.tsx";
import TextBox from "./components/TextBox.tsx";
import CategorySubheading from "./components/CategorySubheading.tsx";
import './css/App.css';

function App() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
    };

  return (
  <div onClick={handleClick}>
    <div className="top-heading">
    <MainHeading isActive={isActive}>Design for Displacement III</MainHeading>
    <MainHeading isSubheading={true} isActive={isActive}>A project by Dundee Uni</MainHeading>
    </div>
    <div className="page-content">
    <div className="map-content react-map">
        <WorldGlobe />
    </div>
    <div className="main-content">
        <TextBox direction="left" span={[1, 3]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        </TextBox>

        <Image direction="right" source="image_placeholder_wire.jpg" altText="placeholder" span={[3, 4]} />

        <Image direction="left" source="image_placeholder_wire.jpg" altText="placeholder" span={[1, 2]}/>

        <TextBox direction="right" span={[2, 4]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </TextBox>

        <Image direction="left" source="bigimage_placeholder.jpg" altText="bigplaceholder" span={[1, 4]}/>

        <CategorySubheading>SubHeading</CategorySubheading>

        <TextBox direction="left" span={[1, 3]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </TextBox>

        <Image direction="right" source="image_placeholder_wire.jpg" altText="placeholder" span={[3, 4]}/>

        <Image direction="left" source="image_placeholder_wire.jpg" altText="placeholder" span={[1, 2]}/>

        <TextBox direction="right" span={[2, 4]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </TextBox>

    </div>


    </div>

  </div>
  );
}

export default App;