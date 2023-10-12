import styles from './Card.module.scss';
import { useState } from 'react';

export const Card = ({ id, imgUrl, title, price, onAddCart, onFavorite }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onAddCart({ id, imgUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? '/img/favorites.svg' : '/img/unfavorites.svg'}
          alt="Закладка"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Кроссовки" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/checked.svg' : '/img/btn-plus.svg'}
          alt="Добавить"
        />
      </div>
    </div>
  );
};
