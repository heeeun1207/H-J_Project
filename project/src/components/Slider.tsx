import React ,{ useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselSlider.css'; 
import { useMovieData } from '../hooks/MovieData.tsx'
import CustomModal from './CustomModal.tsx';

const MoviesSlider = () => {
  const { Movie } = useMovieData(); 


  const first11Movies = Movie.slice(0, 11);

  const[modalIsOpen, setModalIsOpen] = useState(false);
  const[selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalIsOpen(false);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <div className="carousel-slider">
      <Slider {...settings}>
        {first11Movies.map(movie => (
          <div className="carousel-slide" key={movie.id} onClick={ ()=> openModal(movie)}>
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
        ))}
      </Slider>
      {selectedMovie && (
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          posterUrl={selectedMovie.posterUrl}
          title={selectedMovie.title}
          content={selectedMovie.overview}
        />
      )}
    </div>
  );
};

export default MoviesSlider;
