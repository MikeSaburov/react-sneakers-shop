import styles from './Card.module.scss';
import { useState } from 'react';
import ContentLoader from 'react-content-loader';

export const Card = ({
  id,
  imgUrl,
  title,
  price,
  onAddCart,
  onFavorite,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

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
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="30" y="9" rx="0" ry="0" width="0" height="2" />
          <rect x="0" y="101" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="126" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="173" rx="2" ry="2" width="80" height="24" />
          <rect x="115" y="169" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              onClick={onClickFavorite}
              src={isFavorite ? '/img/favorites.svg' : '/img/unfavorites.svg'}
              alt="Закладка"
            />
          </div>
          <img width="100%" height={135} src={imgUrl} alt="Кроссовки" />
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
        </>
      )}
    </div>
  );
};
