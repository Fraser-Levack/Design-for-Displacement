import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/SlideShow.css';

const images = Array(10).fill(null); // Placeholder for images

function SlideShow() {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const displayedImages = images.slice(startIndex, startIndex + 4);

    return (
        <div className={"slideshow"}>
            <h2>Title</h2>
            <div className="slideshow-container">
                <button onClick={handlePrev} className="arrow left-arrow">
                    <FaChevronLeft/>
                </button>
                <div className="images-container">
                    {displayedImages.map((_, index) => (
                        <div key={index} className="image-placeholder"></div>
                    ))}
                </div>
                <button onClick={handleNext} className="arrow right-arrow">
                    <FaChevronRight/>
                </button>
            </div>
            <p>Lores ipsum huydt eriust duiunt uir.</p>
        </div>
    );
}

export default SlideShow;