import React, { useState } from 'react';
import '../styles/ListCard.css';
import usePopularData from '../hooks/usePopularData.tsx';
import CustomModal from './CustomModal.tsx'; // CustomModal 컴포넌트를 import 합니다.

const PopularCard = () => {
  const { tvPopular, moviePopular, loading } = usePopularData();

  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalIsOpen(false);
  };

  if (loading) {
    // 데이터 로딩 중에는 로딩 상태를 표시할 수 있습니다.
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>인기 TV 시리즈</h2>
      <div className="list">
        {tvPopular.map((item) => (
          <div className="list-card" key={item.id} onClick={() => openModal(item)}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.name} className="list-card-img" />
          </div>
        ))}
      </div>

      <h2>인기 영화</h2>
      <div className="list">
        {moviePopular.map((item) => (
          <div className="list-card" key={item.id} onClick={() => openModal(item)}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="list-card-img" />
          </div>
        ))}
      </div>

      {selectedItem && (
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          posterUrl={`https://image.tmdb.org/t/p/w500${selectedItem.poster_path}`}
          title={selectedItem.name || selectedItem.title}
          content={selectedItem.overview}
        />
      )}
    </div>
  );
};

export default PopularCard;
