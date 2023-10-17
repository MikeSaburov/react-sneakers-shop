import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context';

export const Header = (props) => {
  const { cartItems } = useContext(AppContext);

  //Сумма в корзине
  const totalPrice = cartItems.reduce((summ, obj) => obj.price + summ, 0);

  console.log();
  return (
    <header className="d-flex justify-between  align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Логотип" />
          <div className="nameShop">
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="openCart" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>{new Intl.NumberFormat('ru-RU').format(totalPrice)} руб.</span>
        </li>
        <li className="favorite" onClick={() => null}>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
            <span>Закладки</span>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
};
