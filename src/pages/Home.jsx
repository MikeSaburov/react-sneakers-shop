import { Card } from '../components/Card';

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
  isLoading,
}) => {
  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filterItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onAddCart={(obj) => onAddToCart(obj)}
        loading={isLoading}
      />
    ));
  };

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
              src="img/remove.svg"
              alt="Очистить"
            />
          )}

          <img width={14.25} height={14.25} src="img/search.svg" alt="Поиск" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="cardBlock">{renderItems()}</div>
    </div>
  );
};
