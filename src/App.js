function App() {
  return (
    <div className="wrapper clear">
      <aside className="overlay">
        <div className="drawer">
          <h2 className="mb-20">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 ">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 990 руб.</b>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="/img/remove.svg"
                alt="Удалить из корзины"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 ">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 990 руб.</b>
              </div>
              <img
                className="removeBtn"
                width={32}
                height={32}
                src="/img/remove.svg"
                alt="Удалить из корзины"
              />
            </div>
          </div>
        </div>
      </aside>

      <header className="d-flex justify-between  align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Логотип" />
          <div>
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/img/user.svg"
              alt="Пользователь"
            />
          </li>
        </ul>
      </header>
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
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unfavorites.svg" alt="Не в закладках" />
            </div>
            <img
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
              alt="Кроссовки"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/2.jpg"
              alt="Кроссовки"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/3.jpg"
              alt="Кроссовки"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/4.jpg"
              alt="Кроссовки"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Добавить"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
