import React from 'react';
import AppContext from '../context';

//Кастомный хук
export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((summ, obj) => obj.price + summ, 0);

  return { cartItems, setCartItems, totalPrice };
};
