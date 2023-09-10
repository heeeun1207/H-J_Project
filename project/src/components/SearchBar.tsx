import React, { useState, useEffect } from 'react';

const SearchBar = () => {
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
    <div>
      <input
        type="text"
        placeholder="영화, TV 프로그램, 인물 검색"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div>
        {searchResults.map((item) => (
          <div key={item.id}>
            <p>
              {item.title || item.name} ({item.media_type})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
