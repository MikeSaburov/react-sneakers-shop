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

    axios
      .get('https://65273d4c917d673fd76d83f7.mockapi.io/favorite')
      .then((res) => {
        setFavorites(res.data);
      });
  }, []); // Выполняет при первом рендере

  //Добавляем в корзину товары (и отпавляем на бэкенд)
  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => item.id === obj.id)) {
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      }
      // axios
      //   .post('https://6524f95067cfb1e59ce654b0.mockapi.io/cart', obj)
      //   .then((res) => setCartItems((prev) => [...prev, res.data]));
    } catch (error) {
      alert('Не удалось добавить товар');
      console.log(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.title === obj.title)) {
        axios.delete(
          `https://65273d4c917d673fd76d83f7.mockapi.io/favorite/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        await axios
          .post('https://65273d4c917d673fd76d83f7.mockapi.io/favorite', obj)
          .then((res) => setFavorites((prev) => [...prev, res.data]));
      }
    } catch (error) {
      alert('Не удалось добавить в Закладки');
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://6524f95067cfb1e59ce654b0.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {}
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
              exact
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
