import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
//import AppContext from '../context';

export const Orders = () => {
  //const { onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://65273d4c917d673fd76d83f7.mockapi.io/orders'
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <h1>Мои заказы</h1>

      <div className="d-flex flex-wrap justify-center	">
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card
            className="d-flex justify-between"
            key={index}
            //onFavorite={(obj) => onAddToFavorite(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
