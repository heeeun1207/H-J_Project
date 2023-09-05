import React from 'react';
import { useWatchList } from '../hooks/WatchListContext.tsx';
import '../styles/ListCard.css';

const ListCard = () => {
  const { List } = useWatchList();

  return (
    <div className="watchlist">
      {List.map((item) => (
        <div className="watchlist-card" key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500${item.posterUrl}`} alt={item.title} className="watchlist-card-img" />
          {/* <h3>{item.title}</h3> */}
          {/* <p>{item.overview}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ListCard;