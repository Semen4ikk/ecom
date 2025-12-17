import {Card} from "../shared/ui/card.tsx";
import {items} from "../entities/Item.ts";
import {useState} from "react";
import {Search} from "../shared/ui/search.tsx";
import {filterItems} from "../features/filterItems.tsx";
import {Modal} from "../shared/ui/itemModal.tsx";
import {ItemDetails} from "../entities/ItemDetails.tsx";

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
    return (
        <>
            <Search value={searchQuery} onChange={setSearchQuery}/>
            <div className="list">
                {displayedItems.map((item) => (
                    <Card key={item.id} item={item} onClick={() => handleCardClick(item)}/>
                ))}
            </div>
            <Modal isOpen={!!selectedItem} onClose={closeModal}>
                {selectedItem && <ItemDetails item={selectedItem} />}
            </Modal>
        </>
    )
}