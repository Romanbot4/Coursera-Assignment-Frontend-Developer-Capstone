import './TestimonialCard.css';
import QuoteIcon from '../assets/icons/quote.svg';
import Star from './Star';

const TestimonialCard = ({ testimonial }) => {
    const { fullName, description, says, image, rating } = testimonial;

    return (
        <article className='testimonial-card'>
            <section className='user-profile'>
                <img src={image} alt={fullName + "'s profile picture."} />
                <div className="content">
                    <h4 className="text-2xl">{fullName}</h4>
                    <p className="text-small text-neutral">{description}</p>
                </div>
            </section>

            <blockquote>
                {says}
            </blockquote>

            <div className='rating-stars'>
                {
                    rating.map((rating, index) => {
                        return <Star key={index} percentage={rating} />
                    })
                }
            </div>

            <img src={QuoteIcon} alt="quote symbol" className='blockquote-symbol' />
        </article>
    );
}

export default TestimonialCard;