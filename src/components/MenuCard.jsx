import './MenuCard.css';
import DeliveryIcon from '../assets/icons/delivery.svg'


const MenuCard = ({ menu }) => {
    const { name, image, price, description } = menu;

    return (
        <article className='menu-card'>
            <img src={image} alt={name} />
            <div className="content">
                <div>
                    <div className="title">
                        <h4 className="text-2xl">{name}</h4>
                        <h4 className="text-2xl text-secondary">{price}</h4>
                    </div>
                    <p>{description}</p>
                </div>
                <button className="order-button text-base">
                    Order a delivery
                    <img src={DeliveryIcon} alt={name} />
                </button>
            </div>
        </article>
    );
}

export default MenuCard;