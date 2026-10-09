import ImageA from '../assets/images/Mario and Adrian A.jpg';
import ImageB from '../assets/images/Mario and Adrian b.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about">
            <article className="about-us container">
                <div >
                    <h2 className="text-5xl text-secondary">Little Lemon</h2>
                    <h4 className="text-4xl">Chicago</h4>
                    <p>
                        Welcome to <span style={{ fontWeight: 'bold' }}>Little Lemon</span>, where vibrant Mediterranean flavors meet a warm, contemporary neighborhood atmosphere. Founded on a passion for fresh, wholesome ingredients and time-honored culinary traditions, our restaurant is designed to be a gathering place for food lovers, families, and friends.
                        At Little Lemon, we believe that great food starts with exceptional ingredients. Our menu is a modern celebration of Mediterranean cuisine, featuring vibrant citrus notes, crisp garden-fresh produce, sustainably sourced seafood, and aromatic herbs. Every dish—from our signature small plates and hand-crafted flatbreads to our house-made dressings and desserts—is prepared daily from scratch by our talented culinary team.
                        We strive to create more than just a place to eat; we offer an immersive dining experience. Whether you are joining us for a lively weekend dinner, a relaxed business lunch, or a quiet evening on our outdoor patio, our welcoming staff ensures every guest feels like family.
                    </p>
                </div>
                <div className='abous-us-image-wrapper '>
                    <img src={ImageA} alt="Mario and Adrian" srcset="" />
                    <img src={ImageB} alt="Mario and Adrian" />
                </div>
            </article>
        </section>
    );
}

export default AboutUs;