import { useState, Suspense, lazy} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from "./layout/NavBar.tsx";
import WorldGlobe from "./content/WorldGlobe.tsx";
import WorldMap from "./content/WorldMap.tsx";
import SwitchButton from "./control/SwitchButton.tsx";

import StickyBar from "./layout/StickyBar.tsx";
import ScrollSpy from "./control/ScrollSpy.tsx";

const Macro = lazy(() => import('./Macro.tsx'));
const Meso = lazy(() => import('./Meso.tsx'));
const Micro = lazy(() => import('./Micro.tsx'));

import '../css/App.css';

function Home() {
    const [activeTab, setActiveTab] = useState("Macro");
    const [mapSwitch, setMapSwitch] = useState(false);

    const sections = [
        'Introduction', 'Politics',
        'Economics', 'Society',
        'Physical Displacement',
        'Health + Wellbeing',
        'Built Environment'];

    const [activeSection, setActiveSection] = useState(sections[0]);

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
                if (!mapSwitch) {
                    return <WorldGlobe color={'#bfbfbf'}/>;
                }
                return <WorldMap />;
            case 'Meso':
                return null;
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
                    <SwitchButton setMapSwitch={setMapSwitch} mapSwitch={mapSwitch}/>
                </div>
                <ScrollSpy sections={sections} onActiveSectionChange={setActiveSection} />
                < StickyBar setActiveTab={setActiveTab} activeTab={activeTab} sections={sections} activeSection={activeSection}/>

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

export default Home;