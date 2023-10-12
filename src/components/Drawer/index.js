export const Drawer = ({ onClose, items = [], onRemove }) => {
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
              <button className="greenButton">
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
          <div className=" cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/emptyCart.svg"
              alt="Пустая корзина"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хоть одну пару кроссовок</p>
            <button onClick={onClose} className="greenButton">
              <img width={14} height={12} src="/img/arrowBack.svg" alt="" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
