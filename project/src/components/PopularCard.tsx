import React from 'react';
import '../styles/ListCard.css';
import usePopularData from '../hooks/usePopularData.tsx';

const PopularCard = () => {
  const { tvPopular, moviePopular, loading } = usePopularData();

  if (loading) {
    // 데이터 로딩 중에는 로딩 상태를 표시할 수 있습니다.
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>인기 TV 시리즈</h2>
      <div className="list">
        {tvPopular.map((item) => (
          <div className="list-card" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.name} className="list-card-img" />
          </div>
        ))}
      </div>

      <h2>인기 영화</h2>
      <div className="list">
        {moviePopular.map((item) => (
          <div className="list-card" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="list-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCard;
