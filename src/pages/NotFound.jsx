import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <section className="container not-found">
            <h1 className="text-6xl text-secondary">404</h1>
            <h2 className="text-4xl">Page not found</h2>
            <p className="text-xl">Sorry, the page you are looking for doesn't exist yet.</p>
            <Link to="/" className="button">Back to Home</Link>
        </section>
    );
}

export default NotFound;
