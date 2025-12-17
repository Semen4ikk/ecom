export const Header: React.FC<any> = () => {
    return (
        <>
            <input
                type="text"
                placeholder="Поиск"
                className="search__input"
            />
            <button type="submit" className="search__btn">
                Найти
            </button>

        </>
    )}