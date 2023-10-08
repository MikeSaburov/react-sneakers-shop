function App() {
  return (
    <div className="wrapper">
      <header className="d-flex">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Логотип" />
          <div className="headerInfo">
            <h3>React Sneackers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
