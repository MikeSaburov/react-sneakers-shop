import { Card } from '../components/Card';

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
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
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, id) => (
            <Card
              key={item.id} //Здесь взял за key ссылку на изображение, т.к. это единственное уникальное значение
              {...item}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onAddCart={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
};
