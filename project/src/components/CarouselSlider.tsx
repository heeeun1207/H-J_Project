import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselSlider.css'; 
import { useMovieData } from '../hooks/MovieDataContext.tsx'

const CarouselSlider = () => {
  const { movies } = useMovieData(); // 영화 데이터 가져오기

  // 처음 10개의 영화 정보만 추출
  const first10Movies = movies.slice(0, 10);

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
          <div className="carousel-slide" key={movie.id}>
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
