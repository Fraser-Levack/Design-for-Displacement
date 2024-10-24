import MainHeading from './MainHeading.tsx';
import WorldMap from "./WorldMap.tsx";
import './css/App.css';

function App() {
  return (
    <div>
        <MainHeading>Design for Displacement</MainHeading>
        <MainHeading isSubheading={true}>A project by Dundee Uni</MainHeading>
        <WorldMap fill="#333" stroke="#000"/>
    </div>
  );
}

export default App;