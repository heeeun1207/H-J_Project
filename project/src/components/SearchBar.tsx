import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css'; 
import CustomModal from './CustomModal.tsx';


const SearchBar = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (item) => { 
    setSelectedMovie(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalIsOpen(false);
  };

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '4f7a2baa745822c7e805100300f62cc6'; 

  useEffect(() => {
    if (!searchInput) {
      // 검색어가 비어있으면 검색 결과를 초기화.
      setSearchResults([]);
      return;
    }

    // 검색 API 
    const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchInput}&language=ko-KR`;

    // 검색 요청
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('검색 중 오류 발생:', error);
      });
  }, [searchInput, apiKey]);

  return (
    <div className="search-bar">
    <input
      type="text"
      className="search-input"
      placeholder="영화, TV 프로그램, 인물 검색"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
    <div className="search-results">
      {searchResults.map((item) => (
        <div className="result-item" key={item.id} onClick={() => openModal(item)}>
          <img className="img-item" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}></img>
          <p>
            {item.title || item.name} ({item.media_type})
          </p>
        </div>
      ))}
    </div>
    {selectedMovie && (
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          posterUrl={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          title={selectedMovie.title}
          content={selectedMovie.overview}
        />
      )}
  </div>

);
};
export default SearchBar;
