import React, { useEffect, useState } from 'react';
import './App.css';
import bakingImage from './images/baking.png';
import goodgirlsImage from './images/goodgirls.png';
import starImage from './images/star.png';

function App() {
  const slides = [
    { src: bakingImage, alt: '베이킹임파서블', caption: '베이킹 임파서블' },
    { src: goodgirlsImage, alt: '굿걸즈', caption: '굿걸즈' },
    { src: starImage, alt: '별나도괜찮아', caption: '별나도 괜찮아' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div id="root">
      <main id="slide">
        {slides.map((slide, index) => (
          <section key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
            <img src={slide.src} alt={slide.alt} />
            <p>{slide.caption}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
