import type {Item} from "../entities/Item.ts";

export const filterItems = function (items: Item[], searchQuery: string): Item[] {
     return items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
}
