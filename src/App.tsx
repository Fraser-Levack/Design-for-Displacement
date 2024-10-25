import MainHeading from './components/MainHeading.tsx';
import WorldMap from "./components/WorldMap.tsx";
import Image from "./components/Image.tsx";
import BigImage from "./components/BigImage.tsx";
import TextBox from "./components/TextBox.tsx";
import CategorySubheading from "./components/CategorySubheading.tsx";
import './css/App.css';

function App() {
  return (
  <>
    <div className="top-heading">
    <MainHeading>Design for Displacement</MainHeading>
    <MainHeading isSubheading={true}>A project by Dundee Uni</MainHeading>
    </div>

    <div className="main-content">

        <WorldMap fill="#333" stroke="#000"/>

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

        <CategorySubheading>SubHeading - info about x</CategorySubheading>

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
  </>
  );
}

export default App;