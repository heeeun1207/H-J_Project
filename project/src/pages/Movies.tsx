import React from 'react';
import Navbar from '../components/Navbar.tsx';
import { useMovieData } from '../hooks/MovieDataContext.tsx';

const Movies = () => {
  const { movies } = useMovieData();


  return (
    <div>
      <Navbar></Navbar>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default Movies;