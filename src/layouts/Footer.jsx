import { Link } from 'react-router-dom';
import Logo from '../assets/logos/logo_white.png';
import FacebookIcon from '../assets/social-icons/icon-facebook.svg';
import InstagramIcon from '../assets/social-icons/icon-instagram.svg';
import TwitterIcon from '../assets/social-icons/icon-twitter.svg';
import YoutubeIcon from '../assets/social-icons/icon-youtube.svg';
import './Footer.css';

const contacts = [
    "123 Lemon Street, Chicago, IL 60602",
    "+1 (312) 555-0123",
    "hello@littlelemon.com",
];

const socials = [
    { name: "Facebook", url: "https://www.facebook.com", icon: FacebookIcon },
    { name: "Instagram", url: "https://www.instagram.com", icon: InstagramIcon },
    { name: "Twitter", url: "https://www.twitter.com", icon: TwitterIcon },
    { name: "YouTube", url: "https://www.youtube.com", icon: YoutubeIcon },
];

const Footer = ({ navLinks }) => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <img className="footer-logo" src={Logo} alt="Little Lemon" />

                <nav className="footer-column">
                    <h4 className="text-3xl text-secondary">Sitemap</h4>
                    <ul>
                        {
                            navLinks.map((navLink, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={navLink.path} aria-label={navLink.name}>
                                            {navLink.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>

                <div className="footer-column">
                    <h4 className="text-3xl text-secondary">Contact</h4>
                    <address>
                        <ul>
                            {
                                contacts.map((contact, index) => {
                                    return <li key={index}>{contact}</li>
                                })
                            }
                        </ul>
                    </address>
                </div>

                <div >
                    <h4 className="text-3xl text-secondary">Socials</h4>
                    <ul className='social-icons'>
                        {
                            socials.map((social, index) => {
                                return (
                                    <li key={index}>
                                        <a href={social.url} target="_blank" rel="noreferrer">
                                            <img src={social.icon} alt={social.name} srcset="" />
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>

            <p className="container footer-copyright text-sm">© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
