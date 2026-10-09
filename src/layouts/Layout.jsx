import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Menu", path: "/#menu" },
    { name: "Reservations", path: "/booking" },
    { name: "Order Online", path: "/order" },
    { name: "Login", path: "/login" },
];

const Layout = ({ children }) => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const section = hash ? document.getElementById(hash.slice(1)) : null;

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <>
            <Header navLinks={navLinks} />
            <main>
                {children}
            </main>
            <Footer navLinks={navLinks} />
        </>
    );
}

export default Layout;
