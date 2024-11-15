import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/SlideShow.css';

function SlideShow() {

    return (
        <div className="slideshow">
            <h2>Title</h2>

            <FaChevronLeft />

            <FaChevronRight />

            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}

export default SlideShow;
