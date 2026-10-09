import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImage from '../assets/images/restauranfood.jpg'

const Hero = () => {
    return (
        <div className="bg-primary">
            <section className="container hero">
                <div className="detail">
                    <h1 className="text-5xl text-secondary">Little Lemon</h1>
                    <h2 className="text-4xl">Chicago</h2>
                    <p className="text-xl font-medium">We are a family owned
                        Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.</p>

                    <Link to="/booking" className="button">Reserve a Table</Link>
                </div>

                <img src={HeroImage} alt="Restaurant Food" />

            </section>
        </div>
    );
}

export default Hero;