import { useContext } from 'react';
import AppContext from '../../context';

export const Info = ({ image, title, discripton }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className=" cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="Пустая корзина" />
      <h2>{title}</h2>
      <p className="opacity-6">{discripton}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img width={14} height={12} src="/img/arrowBack.svg" alt="" />
        Вернуться назад
      </button>
    </div>
  );
};
