import React, { useRef } from 'react';
import '../styles/main.css';
import Navbar from '../components/Navbar.tsx';
import videoSource from '../assets/You.mp4';
import videoImage from '../assets/You.jpeg';
import useAutoPlayVideo from '../hooks/useAutoPlayVideo.js';
import CarouselSlider from '../components/CarouselSlider.tsx';

function Main() {
  const videoRef = useRef(null);

  // 자동 재생 시간초 설정: 5초 후에 자동 재생
  const autoPlayDelay = 5;

  useAutoPlayVideo(videoRef, autoPlayDelay);

  return (
    <div>
      <Navbar />
      <div className="netflix-video-container">
        <video ref={videoRef} src={videoSource} controls autoPlay muted poster={videoImage} />
      </div>
      <CarouselSlider></CarouselSlider>
    </div>
  );
}

export default Main;
