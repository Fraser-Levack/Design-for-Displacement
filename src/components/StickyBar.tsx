import '../css/App.css';
import '../css/StickyBar.css';

interface Props {
    setActiveTab: (tab: string) => void;
    activeTab: string;
}

function StickyBar({ setActiveTab, activeTab }: Props) {
    return (
        <div className={"sticky-bar"}>
            <div className={"sticky-top"}>
            <ul>
                <li onClick={() => setActiveTab('Macro')}
                    className={`tab ${activeTab === 'Macro' ? 'active' : ''}`}>
                    <div className={"text"}> Macro </div></li>
                <li onClick={() => setActiveTab('Meso')}
                    className={`tab ${activeTab === 'Meso' ? 'active' : ''}`}>
                    <div className={"text"}> Meso</div>
                </li>
                <li onClick={() => setActiveTab('Micro')}
                    className={`tab ${activeTab === 'Micro' ? 'active' : ''}`}>
                    <div className={"text"}> Micro</div>
                </li>
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