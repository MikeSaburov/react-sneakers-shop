export const Card = () => {
  return (
    <div className="card mr-30">
      <div className="favorite">
        <img src="/img/unfavorites.svg" alt="Не в закладках" />
      </div>
      <img width={133} height={112} src="img/sneakers/1.jpg" alt="Кроссовки" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>12 999 руб</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Добавить" />
        </button>
      </div>
    </div>
  );
};
