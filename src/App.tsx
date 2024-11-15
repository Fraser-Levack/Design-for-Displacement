import { useState, Suspense, lazy} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from "./components/NavBar.tsx";
import WorldGlobe from "./components/WorldGlobe.tsx";
import WorldMap from "./components/WorldMap.tsx";

import StickyBar from "./components/StickyBar.tsx";

const Macro = lazy(() => import('./components/Macro.tsx'));
const Meso = lazy(() => import('./components/Meso.tsx'));
const Micro = lazy(() => import('./components/Micro.tsx'));

import './css/App.css';

function App() {
    const [activeTab, setActiveTab] = useState("Macro");

    const renderContent = () => {
        switch (activeTab) {
            case 'Macro':
                return <Macro />;
            case 'Meso':
                return <Meso />;
            case 'Micro':
                return <Micro />;
            default:
                return null;
        }
    };

    const renderTopContent = () => {
        switch (activeTab) {
            case 'Macro':
                return <WorldGlobe color={'#bfbfbf'}/>;
            case 'Meso':
                return < WorldMap />;
            case 'Micro':
                return null;
            default:
                return null;
        }
    };

    return (
    <div className={"page-content"}>
    <div className={"main-heading"}>
        <NavBar />
    </div>
    <div className="page-content">
    <div className="map-content">
        {renderTopContent()}
    </div>
    < StickyBar setActiveTab={setActiveTab} activeTab={activeTab}/>

    <TransitionGroup>
        <CSSTransition
            key={activeTab}
            timeout={400}
            classNames="fade"
        >
            <Suspense fallback={<div>Loading...</div>}>
                {renderContent()}
            </Suspense>
        </CSSTransition>
    </TransitionGroup>

    </div>
    </div>
    );
}

export default App;