import {Card} from "../shared/ui/card.tsx";
import {items} from "../entities/Item.ts";
import {useState} from "react";
import {Search} from "../shared/ui/search.tsx";
import {filterItems} from "../features/filterItems.tsx";
import {Modal} from "../shared/ui/itemModal.tsx";
import {ItemDetails} from "../entities/ItemDetails.tsx";
import './MainPage.css';
function randomStars(min: number, max: number): number {
    return min + Math.random() * (max - min);
}
export function MainPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<null | (typeof items[0])>(null);

    const displayedItems = filterItems(items, searchQuery);
    const handleCardClick = (item: typeof items[0]) => {
        setSelectedItem(item);
    };
    const closeModal = () => {
        setSelectedItem(null);
    };

    const stars = Array.from({ length: 100 }, (_, i) => (
        <div
            key={i}
            className="main-page__star"
            style={{
                top: `${randomStars(0, 100)}%`,
                left: `${randomStars(0, 100)}%`,
                width: `${randomStars(1, 3)}px`,
                height: `${randomStars(1, 3)}px`,
                opacity: randomStars(0.4, 1),
            }}
        />
    ));

    return (
        <div className="main-page">
            <div className="main-page__search">
                <Search value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="main-page__list">
                {displayedItems.map((item) => (
                    <Card key={item.id} item={item} onClick={() => handleCardClick(item)} />
                ))}
            </div>
            <Modal isOpen={!!selectedItem} onClose={closeModal}>
                {selectedItem && <ItemDetails item={selectedItem} />}
            </Modal>
            {stars}
        </div>
    );
}