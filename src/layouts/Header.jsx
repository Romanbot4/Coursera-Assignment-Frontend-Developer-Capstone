import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logos/logo.png';
import HumburgerIcon from '../assets/icons/icon_hamburger_menu.svg';
import CloseIcon from '../assets/icons/icon_close.svg';
import './Header.css';

const Header = ({ navLinks }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header>
            <nav className="container header">
                <Link to="/">
                    <img className="header-logo" src={Logo} alt="Little Lemon" />
                </Link>

                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className='mobile-nav'
                    aria-label='toggle navigation menu'
                    aria-expanded={navOpen}
                    aria-controls='nav-list'
                >
                    <img src={navOpen ? CloseIcon : HumburgerIcon} alt="Navigation Icon" />
                </button>

                <ul className="nav-list text-lg font-medium" id="nav-list" data-state={navOpen ? "open" : ""}>
                    {
                        navLinks.map((navLink, index) => {
                            return (
                                <li key={index}>
                                    <Link to={navLink.path} onClick={() => setNavOpen(false)}>{navLink.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}


export default Header;
