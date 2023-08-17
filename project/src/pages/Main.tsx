
import React, { useRef } from 'react';
import '../styles/main.css';
import Navbar from '../components/Navbar.tsx';
import videoSource from '../assets/You.mp4';
import videoImage from '../assets/You.jpeg';
import useAutoPlayVideo from '../hooks/useAutoPlayVideo';

function Main() {
  const videoRef = useRef(null);

  useAutoPlayVideo(videoRef);
  return (
    <div>
      <Navbar />
      <div class="netflix-video-container">
        <video src={videoSource} controls autoPlay muted poster={videoImage}/>
      </div>

    </div>
  )
  }
export default Main;