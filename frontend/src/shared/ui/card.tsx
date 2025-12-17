import {type Item} from "../../entities/Item.ts";

interface CardProps {
    item: Item;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({item, onClick }) => {

    return (
        <>
            <div className="card" onClick={onClick}>
                <div className="image">
                    <img src={item.image} alt={item.title} />
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__price">{item.price} ₽</p>
            </div>
        </>
    )}