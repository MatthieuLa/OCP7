import React, { useState } from "react";

export default function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slideshow-container">
      {pictures.map((picture, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={picture} alt="Logement" className="slideshow-img" />
          )}
        </div>
      ))}
      {length > 1 && (
        <>
          <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
        </>
      )}
      <span className="slideshow-index">{`${current + 1}/${length}`}</span>
    </div>
  );
}
