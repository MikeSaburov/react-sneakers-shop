import styles from './Card.module.scss';
import { useState } from 'react';

export const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unfavorites.svg" alt="Не в закладках" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="Кроссовки" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
