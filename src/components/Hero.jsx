import './Hero.css';
import HeroImage from '../assets/images/restauranfood.jpg'

const Hero = () => {
    return (
        <div className="bg-primary">
            <section className="container hero">
                <div className="detail">
                    <h2 className="text-5xl text-secondary">Little Lemon</h2>
                    <h4 className="text-4xl">Chicago</h4>
                    <p className="text-xl font-medium">We are a family owned
                        Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.</p>

                    <button>Reserve a Table</button>
                </div>

                <img src={HeroImage} alt="Restaurant Food" />

            </section>
        </div>
    );
}

export default Hero;