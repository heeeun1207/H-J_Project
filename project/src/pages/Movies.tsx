import React from 'react';
import Navbar from '../components/Navbar.tsx';
import { useMovieData } from '../hooks/MovieDataContext.tsx';
import CarouselSlider from '../components/CarouselSlider.tsx';

const Movies = () => {
  const { movies } = useMovieData();


  return (
    <div>
      <Navbar></Navbar>
      <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.posterUrl} alt={`${movie.title} Poster`} />
        </div>
      ))}
    </div>
  );
      <CarouselSlider></CarouselSlider>
    </div>
  );
};


export default Movies;