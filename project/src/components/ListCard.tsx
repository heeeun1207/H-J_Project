import React, { useState } from 'react';
import { useWatchList } from '../hooks/WatchListContext.tsx';
import '../styles/ListCard.css';
import CustomModal from './CustomModal.tsx';

const ListCard = () => {
  const { List } = useWatchList();
  // 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => { // movie 파라미터를 받도록 수정
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalIsOpen(false);
  };

  return (
    <div className="list">
      {List.map((item) => (
        <div className="list-card" key={item.id} onClick={() => openModal(item)}> {/* openModal 함수에 item을 전달 */}
          <img src={`https://image.tmdb.org/t/p/w500${item.posterUrl}`} alt={item.title} className="list-card-img" />
        </div>
      ))}
      {selectedMovie && (
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          posterUrl={`https://image.tmdb.org/t/p/w500${selectedMovie.posterUrl}`}
          title={selectedMovie.title}
          content={selectedMovie.overview}
        />
      )}
    </div>
  );
};

export default ListCard;
