import styles from './Card.module.scss';

export const Card = (props) => {
  const onClickPlus = () => {
    alert(props.title);
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
        <button onClick={onClickPlus} className={styles.button}>
          <img width={11} height={11} src="/img/plus.svg" alt="Добавить" />
        </button>
      </div>
    </div>
  );
};
