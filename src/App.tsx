import { useState } from 'react';
import MainHeading from './components/MainHeading.tsx';
import WorldMap from "./components/WorldMap.tsx";
import Image from "./components/Image.tsx";
import BigImage from "./components/BigImage.tsx";
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

    <div className="main-content">

        <WorldMap fill="#333" stroke="#000" isActive={isActive}/>

        <TextBox direction="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        </TextBox>

        <Image direction="right" source="image_placeholder_wire.jpg" altText="placeholder" />

        <Image direction="left" source="image_placeholder_wire.jpg" altText="placeholder" />

        <TextBox direction="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </TextBox>

        <BigImage direction="left" source="bigimage_placeholder.jpg" altText="bigplaceholder" />

        <CategorySubheading>SubHeading</CategorySubheading>

        <TextBox direction="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </TextBox>

        <Image direction="right" source="image_placeholder_wire.jpg" altText="placeholder" />

        <Image direction="left" source="image_placeholder_wire.jpg" altText="placeholder" />

        <TextBox direction="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
    </TextBox>

    </div>
  </div>
  );
}

export default App;