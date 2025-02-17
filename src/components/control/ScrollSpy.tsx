import { useEffect } from 'react';

interface Props {
    sections: string[];
    onActiveSectionChange: (activeSection: string) => void;
}

function ScrollSpy({ sections, onActiveSectionChange }: Props) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSection = sections[0];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && currentSection !== section) {
                    currentSection = section;
                }
            });

            onActiveSectionChange(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections, onActiveSectionChange]);

    return null;
}

export default ScrollSpy;