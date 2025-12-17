interface SearchProps {
    value: string;
    onChange: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
    return (
        <div className="item-search">
            <input
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
};