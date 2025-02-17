import '../../css/App.css';
import '../../css/layout/NavBar.css';
import logo from '/dfd.jpg';
import { FaSearch } from 'react-icons/fa';

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div className="navbar-links">
                <a href="/#/unit-overview">Unit Overview</a>
                <a href="/#/references">References</a>
                <a href="/#/contact">Contact</a>
                <FaSearch className="navbar-search-icon" />
            </div>

        </div>
    );
}

export default NavBar;