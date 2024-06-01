// src/ImageSlider.jsx
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import webdev from "./webdev.jpg";
import appdev from "./1720.jpg";
import aidev from "./aidev.jpg";

const images = [aidev, appdev, webdev];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <div className="left-arrow" onClick={goToPrevious}>
        ❮
      </div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="right-arrow" onClick={goToNext}>
        ❯
      </div>
    </div>
  );
}

export default ImageSlider;
