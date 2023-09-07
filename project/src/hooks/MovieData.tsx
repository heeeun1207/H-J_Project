import React, { createContext, useContext, useState, useEffect } from 'react';
import MovieData from '../Movie_data.json';

const MovieDataContext = createContext();

export const MovieDataProvider = ({ children }) => {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const formattedMovie = MovieData.map(Movie => ({
      id: Movie.id,
      title: Movie.title,
      posterUrl: Movie.poster_path,
      overview: Movie.overview
    }));

    setMovie(formattedMovie);
  }, []);

  return (
    <MovieDataContext.Provider value={{ Movie }}>
      {children}
    </MovieDataContext.Provider>
  );
};

export const useMovieData = () => {
  return useContext(MovieDataContext);
};