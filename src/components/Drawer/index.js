import { useState } from 'react';

export const Drawer = ({ onClose, items = [] }) => {
  return (
    <aside className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            className="removeBtn cu-p"
            width={32}
            height={32}
            src="/img/remove.svg"
            alt="Удалить"
            onClick={onClose}
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
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
          <button className="greenButton">
            Оформить заказ{' '}
            <img width={14} height={12} src="/img/arrow.svg" alt="Стрелка" />
          </button>
        </div>
      </div>
    </aside>
  );
};
