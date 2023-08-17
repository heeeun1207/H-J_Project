import React from 'react';
import '../styles/main.css';
import Navbar from '../components/Navbar.tsx';
import videoSource from '../assets/You.mp4';
import videoImage from '../assets/You.jpeg';


function main() {
  return (
    <div>
      <Navbar />
      <div class="netflix-video-container">
        <video src={videoSource} controls poster={videoImage}/>
      </div>

    </div>
  )

  }
export default main;