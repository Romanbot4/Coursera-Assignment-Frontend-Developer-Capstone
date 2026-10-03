import TestimonialCard from './TestimonialCard';
import './Testimonials.css';


const testimonials = [
    {
        fullName: "Elena",
        description: "Food Blogger",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
        rating: [1, 1, 1, 1, 1],
        says: "The tasting menu was an absolute delight. Every dish was beautifully presented and packed with incredible flavor. Will definitely be coming back!",
    },
    {
        fullName: "Marcus",
        description: "Local Guide",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
        rating: [1, 1, 1, 1, 0.5],
        says: "Great atmosphere and fantastic service. The signature pasta is a must-try, though the wait time for a table was a bit long on a weekend.",
    },
    {
        fullName: "Sophia",
        description: "Regular Customer",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
        rating: [1, 1, 1, 1, 0],
        says: "A wonderful neighborhood spot for a cozy dinner. The wine selection is excellent and pairs perfectly with their seasonal appetizers.",
    },
    {
        fullName: "David",
        description: "First-time Diner",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
        rating: [1, 1, 1, 1, 1],
        says: "Hands down the best steak I've had in the city. The staff went above and beyond to make our anniversary celebration incredibly special.",
    },
];

const Testimonials = () => {
    return (
        <section className="container testimonials">
            <h2 className="text-5xl testimonials-heading">What Our Customers Says</h2>

            <div className="testimonial-items">
                {
                    testimonials.map((testimonial, index) => {
                        return <TestimonialCard key={index} testimonial={testimonial} />
                    })
                }
            </div>

        </section>
    );
}

export default Testimonials;