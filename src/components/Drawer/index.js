import styles from './Drawer.module.scss';

export const Drawer = () => {
  return (
    <aside style={{ display: 'none' }} className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className=" d-flex justify-between mb-30 ">
          Корзина
          <img
            className={(styles.removeBtn, 'cu-p')}
            width={32}
            height={32}
            src="/img/remove.svg"
            alt="Удалить"
          />
        </h2>

        <div className={styles.items}>
          <div className={(styles.cartItem, ' d-flex align-center mb-20')}>
            <div
              style={{ backgroundImage: `url(/img/sneakers/1.jpg)` }}
              className={styles.cartItemImg}
            ></div>
            <div className="mr-20 ">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 990 руб.</b>
            </div>
            <img
              className={styles.removeBtn}
              width={32}
              height={32}
              src="/img/remove.svg"
              alt="Удалить"
            />
          </div>
        </div>
        <div className={styles.cartTotalBlock}>
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
          <button className={styles.greenButton}>
            Оформить заказ{' '}
            <img width={14} height={12} src="/img/arrow.svg" alt="Стрелка" />
          </button>
        </div>
      </div>
    </aside>
  );
};
