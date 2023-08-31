import React, { createContext, useContext, useState, useEffect } from 'react';
import movieData from '../Series_data.json';


const MovieDataContext = createContext();
//콘텍스트 생성

// export const MovieDataProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);


// // MovieDataProvider 컴포넌트 내부의 useEffect 안에서 수정
// useEffect(() => {
//   const apiKey = '4f7a2baa745822c7e805100300f62cc6';
//   const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const popularMovies = data.results;
      
//       // popularMovies 배열을 순회하면서 포스터 이미지 URL을 가져옴
//       const moviesWithPosters = popularMovies.map(movie => ({
//         ...movie,
//         posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//       }));

//       setMovies(moviesWithPosters);
//       console.log(moviesWithPosters);
//     })
//     .catch(error => {
//       console.error('Error fetching movie data:', error);
//     });
// }, []);


//   return (
//     //자식 컴포넌트에 movies 를 제공하기위한 프로바이더
//     <MovieDataContext.Provider value={{ movies }}>
//       {children}
//     </MovieDataContext.Provider>
//   );
// };

// export const useMovieData = () => {
//   return useContext(MovieDataContext);
// };

export const MovieDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const formattedMovies = movieData.map(movie => ({
      id: movie.id,
      title: movie.title,
      posterUrl: movie.poster_path,
      overview: movie.overview
    }));

    setMovies(formattedMovies);
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