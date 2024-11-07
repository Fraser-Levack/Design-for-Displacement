import '../css/App.css';
import '../css/StickyBar.css';

function StickyBar() {
    return (
        <div className={"sticky-bar"}>
            <div className={"sticky-top"}>
            <ul>
                <li> Macro </li>
                <li> Meso </li>
                <li> Micro </li>
            </ul>
            </div>
            <div className={"sticky-bottom"}>
                <ul>
                    <li> Introduction </li>
                    <li> Politics </li>
                    <li> Economics </li>
                    <li> Society </li>
                    <li> Physical Displacement </li>
                    <li> Health + Wellbeing </li>
                    <li> Built Environment </li>
                </ul>
            </div>
        </div>
    );
}

export default StickyBar;