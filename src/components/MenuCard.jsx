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
                        <h3 className="text-2xl">{name}</h3>
                        <p className="price text-2xl text-secondary">{price}</p>
                    </div>
                    <p>{description}</p>
                </div>
                <button className="order-button text-base" aria-label={`Order ${name} for delivery`}>
                    Order a delivery
                    <img src={DeliveryIcon} alt="" />
                </button>
            </div>
        </article>
    );
}

export default MenuCard;