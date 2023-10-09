import { Card } from './components/Card';
import { Header } from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <aside style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30 ">
            Корзина{' '}
            <img
              className="removeBtn cu-p"
              width={32}
              height={32}
              src="/img/remove.svg"
              alt="Удалить"
            />
          </h2>

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
                alt="Удалить"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/sneakers/3.jpg)' }}
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
                alt="Удалить"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ{' '}
              <img width={14} height={12} src="/img/arrow.svg" alt="Стрелка" />
            </button>
          </div>
        </div>
      </aside>
      <Header />
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
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
