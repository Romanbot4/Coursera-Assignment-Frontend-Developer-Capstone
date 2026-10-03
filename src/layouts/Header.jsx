import { Link } from 'react-router-dom';
import Logo from '../assets/logos/logo_wordmark.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className="container header">
            <Link to="/">
                <img className="header-logo" src={Logo} alt="Little Lemon" />
            </Link>

            <ul className="nav-list text-lg font-medium">
                <li>
                    <Link to="#">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Menu</Link>
                </li>
                <li>
                    <Link to="#">Reservations</Link>
                </li>
                <li>
                    <Link to="#">Order Online</Link>
                </li>
                <li>
                    <Link to="#">Login</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Header;