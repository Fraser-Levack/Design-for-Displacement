import {useEffect} from "react";
import worldMap from '/maps/241101_WorldMap.webp';
import '../css/WorldMap.css';

function WorldMap() {

    useEffect(() => {
        const img = new Image();
        img.src = worldMap;
    }, []);

    return (
        <div className={"world-map"}>
            <img src={worldMap} alt="World Map" />
        </div>
    );
}

export default WorldMap;