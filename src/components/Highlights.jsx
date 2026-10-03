import MenuCard from './MenuCard';

import './HighLights.css';


import GreekSaladImage from '../assets/images/greek salad.jpg';
import BruschettaImage from '../assets/images/bruchetta.svg';
import LemonDessertImage from '../assets/images/lemon dessert.jpg';


const menuItems = [
    {
        name: "Greek Salad",
        image: GreekSaladImage,
        price: "$12.99",
        description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
    },
    {
        name: "Bruschetta",
        image: BruschettaImage,
        price: "$5.99",
        description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: "Lemon Dessert",
        image: LemonDessertImage,
        price: "$5.0",
        description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
];


const HighLights = () => {
    return (
        <section className="container highlights">
            <div className="highlights-heading">
                <h2 className="text-5xl">This Week Specials!</h2>
                <button>Online Menu</button>
            </div>

            <div className="menu-items">
                {
                    menuItems.map((menu, index) => {
                        return <MenuCard key={index} menu={menu} />
                    })
                }
            </div>

        </section>
    );
}

export default HighLights;
