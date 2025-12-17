import {Card} from "../shared/ui/card.tsx";
import {items} from "../entities/Item.ts";
import {useState} from "react";
import {Search} from "../shared/ui/search.tsx";
import {filterItems} from "../features/filterItems.tsx";

export function MainPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const displayedItems = filterItems(items, searchQuery);
    return (
        <>
            <Search value={searchQuery} onChange={setSearchQuery}/>
            <div className="list">
                {displayedItems.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}