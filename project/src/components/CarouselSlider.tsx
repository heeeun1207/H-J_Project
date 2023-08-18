import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselSlider.css'; 

const CarouselSlider = () => {
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
        <div className="carousel-slide">
          <img src={require('../assets/You.jpeg')} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={require('../assets/You.jpeg')} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={require('../assets/You.jpeg')} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={require('../assets/You.jpeg')} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={require('../assets/You.jpeg')} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={require('../assets/You.jpeg')} alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
