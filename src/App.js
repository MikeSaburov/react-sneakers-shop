import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favotites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get('https://6524f95067cfb1e59ce654b0.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get('https://6524f95067cfb1e59ce654b0.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []); // Выполняет при первом рендере

  const onAddToCart = (obj) => {
    axios.post('https://6524f95067cfb1e59ce654b0.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }; //Добавляем на сервер товары

  const onAddToFavorite = (obj) => {
    axios.post('https://65273d4c917d673fd76d83f7.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6524f95067cfb1e59ce654b0.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: ${searchValue}`
              : ' Все кроссовки'}
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

            <img
              width={14.25}
              height={14.25}
              src="/img/search.svg"
              alt="Поиск"
            />
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
            .map((item, index) => (
              <Card
                key={index} //Здесь взял за key ссылку на изображение, т.к. это единственное уникальное значение
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                id={item.id}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onAddCart={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
