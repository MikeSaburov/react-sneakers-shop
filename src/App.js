import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              onChangeSearchInput={onChangeSearchInput}
            />
          }
        ></Route>
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
