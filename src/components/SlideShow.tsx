import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/SlideShow.css';

interface SlideShowProps {
    folder: string;
    numImages: number;
}

function isValidFolder(folder: string): boolean {
    const allowedFolders = ['sample_slideshow', 'folder2', 'folder3'];
    return allowedFolders.includes(folder);
}

function SlideShow({ folder, numImages }: SlideShowProps) {
    if (!isValidFolder(folder)) {
        throw new Error('Invalid folder');
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const images = Array.from({ length: numImages }, (_, index) => `${folder}/${index + 1}.png`);

    // Calculate visible images plus placeholders
    const getDisplayImages = () => {
        const prevIndex = (currentIndex - 1 + numImages) % numImages;
        const nextIndex = (currentIndex + 4) % numImages;
        return [
            images[prevIndex], // Left placeholder
            ...images.slice(currentIndex, currentIndex + 4),
            images[nextIndex], // Right placeholder
        ];
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
    };

    // Reset animation state after transition ends
    useEffect(() => {
        const handleTransitionEnd = () => setIsAnimating(false);
        const container = document.querySelector('.images-container');
        container?.addEventListener('transitionend', handleTransitionEnd);
        return () => container?.removeEventListener('transitionend', handleTransitionEnd);
    }, []);

    const displayImages = getDisplayImages();

    return (
        <div className="slideshow">
            <h2>Title</h2>
            <div className="slideshow-container">
                <button onClick={handlePrev} className="arrow left-arrow">
                    <FaChevronLeft />
                </button>
                <div
                    className={`images-container ${isAnimating ? 'animating' : ''}`}
                    style={{ transform: `translateX(${isAnimating ? '-100%' : '0'})` }}
                >
                    {displayImages.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index}`} className="image-placeholder" />
                    ))}
                </div>
                <button onClick={handleNext} className="arrow right-arrow">
                    <FaChevronRight />
                </button>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}

export default SlideShow;
