import { useContext } from 'react';
import { Card } from '../components/Card';
import AppContext from '../components/context';

export const Favorites = ({ onAddToFavorite }) => {
  const state = useContext(AppContext);

  console.log(state);

  return (
    <div className="content p-40">
      <h1>Мои закладки</h1>

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
