import React, { useState, useEffect } from 'react';
import ListCard from '../components/ListCard.tsx'

const PopularData =  ({ tvList, movieList }) => {
  const [tvPopular, setTvPopular] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);

  useEffect(() => {
    const apiKey = '4f7a2baa745822c7e805100300f62cc6';
    const tvApiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
    const movieApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    // TV 데이터 가져오기
    fetch(tvApiUrl)
      .then(response => response.json())
      .then(data => {
        setTvPopular(data.results);
        
      })
      .catch(error => {
        console.error('TV 데이터를 불러오는 중 오류 발생:', error);
      });

    // 영화 데이터 가져오기
    fetch(movieApiUrl)
      .then(response => response.json())
      .then(data => {
        setMoviePopular(data.results);
      })
      .catch(error => {
        console.error('영화 데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div>
< ListCard
  tvList={tvList}
  movieList={movieList}
/>
    </div>
  );
};

export default PopularData;
