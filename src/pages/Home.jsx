import { Card } from '../components/Card';

export const Home = ({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
}) => {
  return (
    <div className="content p-40">
      <div className="titleCardBlock">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : ' Все кроссовки'}
        </h1>
        <div className="searchBlock d-flex align-center">
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear"
              src="/img/remove.svg"
              alt="Очистить"
            />
          )}

          <img width={14.25} height={14.25} src="/img/search.svg" alt="Поиск" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="cardBlock">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, id) => (
            <Card
              key={item.id}
              {...item}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onAddCart={(obj) => onAddToCart(obj)}
              added={cartItems.some((obj) => obj.id === item.id)}
            />
          ))}
      </div>
    </div>
  );
};
