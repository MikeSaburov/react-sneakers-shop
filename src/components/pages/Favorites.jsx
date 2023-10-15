import { useContext } from 'react';
import { Card } from '../components/Card';
import AppContext from '../context';

export const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="content p-40">
      <h1>Мои закладки</h1>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
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
