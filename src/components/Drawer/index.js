import { Info } from '../Info/Info';
import { useContext, useState } from 'react';
import AppContext from '../../context';
import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Drawer = ({ onClose, items = [], onRemove }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplited, setIsOrderComplited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://65273d4c917d673fd76d83f7.mockapi.io/orders',
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplited(true);
      setCartItems([]);

      //Костыль (проблема mocapi)
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://6524f95067cfb1e59ce654b0.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось отправить заказ на сервер');
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    <aside className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            className="removeBtn cu-p"
            width={24}
            height={24}
            src="/img/close.svg"
            alt="Закрыть корзину"
            onClick={onClose}
          />
        </h2>
        {items.length > 0 ? (
          <div className="items">
            <div>
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl}` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 ">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    width={32}
                    height={32}
                    src="/img/remove.svg"
                    alt="Удалить"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
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
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ
                <img
                  width={14}
                  height={12}
                  src="/img/arrow.svg"
                  alt="Стрелка"
                />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplited ? 'Заказ оформлен!' : 'Корзина пустая'}
            discripton={
              isOrderComplited
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добвьте хоть одну пару кроссовок, чтобы сделать заказ'
            }
            image={
              isOrderComplited ? '/img/orderSend.svg' : '/img/emptyCart.svg'
            }
          />
        )}
      </div>
    </aside>
  );
};
