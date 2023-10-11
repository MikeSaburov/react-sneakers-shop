import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://6524f95067cfb1e59ce654b0.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setcartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex align-center">
            <img
              width={14.25}
              height={14.25}
              src="/img/search.svg"
              alt="Поиск"
            />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item.imgUrl} //Здесь взял за key ссылку на изображение, т.к. это единственное уникальное значение
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onAddCart={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
