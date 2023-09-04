import React, { useState } from 'react';
import Navbar from '../components/Navbar.tsx'
import CarouselSlider from '../components/CarouselSlider.tsx';



const App = () => {
  return (
    <div>
      <Navbar />
      <CarouselSlider></CarouselSlider>
    </div>
  )
  };
export default App;