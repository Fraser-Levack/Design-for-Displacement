//import MainHeading from './MainHeading.tsx';
import WorldMap from "./WorldMap.tsx";
import Image from "./Image.tsx";
import TextBox from "./TextBox.tsx";
import './css/App.css';

function App() {
  return (
    <div className="main-content">

        <WorldMap fill="#333" stroke="#000"/>
        <TextBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        </TextBox>
        <Image source="image_placeholder_wire.jpg" altText="placeholder" />
        <Image source="image_placeholder_wire.jpg" altText="placeholder" />
        <TextBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </TextBox>
    </div>
  );
}

export default App;