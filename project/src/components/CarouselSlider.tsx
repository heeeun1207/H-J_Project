import React ,{ useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselSlider.css'; 
import { useMovieData } from '../hooks/MovieDataContext.tsx'
import CustomModal from './CustomModal.tsx';

const CarouselSlider = () => {
  const { movies } = useMovieData(); // 영화 데이터 가져오기

  // 처음 10개의 영화 정보만 추출
  const first10Movies = movies.slice(0, 10);

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
        {first10Movies.map(movie => (
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

export default CarouselSlider;
