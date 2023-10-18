import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import AppContext from './context';
import { Orders } from './pages/Orders';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        //Делаем асинхронную функцию для того чтобы сначала грузилась корзина -> закладки-> товары
        setIsLoading(true); //делаем что пока идет загрузка то значение true
        const cartResponse = await axios.get(
          'https://6524f95067cfb1e59ce654b0.mockapi.io/cart'
        );
        const favoritesResponse = await axios.get(
          'https://65273d4c917d673fd76d83f7.mockapi.io/favorite'
        );
        const itemResponse = await axios.get(
          'https://6524f95067cfb1e59ce654b0.mockapi.io/items'
        );
        setIsLoading(false); //Загрузка выполнилась, занчение = false
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemResponse.data);
      } catch (error) {
        console.log(error);
        alert('Ошибка при загрузке');
      }
    }
    fetchData();
  }, []); // Выполняет при первом рендере

  //Добавляем в корзину товары (и отпавляем на бэкенд)
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://6524f95067cfb1e59ce654b0.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post('https://6524f95067cfb1e59ce654b0.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToCart,
        onAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                onChangeSearchInput={onChangeSearchInput}
                isLoading={isLoading}
                exact
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />

          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
