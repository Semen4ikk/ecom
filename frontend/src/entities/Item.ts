export interface Item {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

export const items = [
    {
        id: 0,
        title: "Плюшевый мишка",
        price: 10000,
        category: "Игрушки",
        image: "https://placecats.com/neo_banana/300/200",
        description: "Мягкий и милый друг",
    },
    {
        id: 1,
        title: "Смарт часы Х100",
        price: 7490,
        category: "Гаджеты",
        image: "https://placecats.com/neo_banana/300/200",
        description: "Водонепроницаемые, GPS, 7-дневный аккумулятор",
    }
]