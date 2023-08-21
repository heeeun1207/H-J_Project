import React, { createContext, useContext, useState, useEffect } from 'react';

const MovieDataContext = createContext();

export const MovieDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    // 영화 API에서 데이터 가져오는 로직
    const apiKey = '4f7a2baa745822c7e805100300f62cc6';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        console.log(data.results);
      })
      
      .catch(error => {
        console.error('Error a movie data:', error);
      });
  }, []);

  return (
    <MovieDataContext.Provider value={{ movies }}>
      {children}
    </MovieDataContext.Provider>
  );
};

export const useMovieData = () => {
  return useContext(MovieDataContext);
};