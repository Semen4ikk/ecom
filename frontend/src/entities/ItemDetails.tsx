import type {Item} from "./Item.ts";

interface ItemDetailsProps {
    item: Item;
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
    return (
        <div className="item-details">
            <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h2>{item.title}</h2>
            <p><strong>Цена:</strong> {item.price} ₽</p>
            <p><strong>Категория:</strong> {item.category}</p>
            <p>{item.description}</p>
        </div>
    );
};