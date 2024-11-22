import '../../css/App.css';
import '../../css/layout/StickyBar.css';

interface Props {
    setActiveTab: (tab: string) => void;
    activeTab: string;
    sections: string[];
    activeSection: string;
}

function StickyBar({ setActiveTab, activeTab, sections, activeSection}: Props) {

    const handleTabClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const stickyBar = document.querySelector('.sticky-bar');
            const yOffset = stickyBar ? -stickyBar.clientHeight: 0;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

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
                    {sections.map((section) => (
                        <li key={section}
                            onClick={() => handleTabClick(section)}
                            className={`section ${activeSection === section ? 'active' : ''}`}>
                            <div className={"text"}>{section}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StickyBar;