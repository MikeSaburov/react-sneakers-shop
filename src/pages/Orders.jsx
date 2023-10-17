//import { useContext } from 'react';
import { Card } from '../components/Card';
//import AppContext from '../context';

export const Orders = ({ onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <h1>Мои заказы</h1>

      <div className="d-flex flex-wrap">
        {[].map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
