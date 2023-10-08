function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between  align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Логотип" />
          <div>
            <h3 className="text-uppercase">React Sneackers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
