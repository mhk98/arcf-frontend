import React, { useState } from "react";
import "./ImageViewer.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import arrow from "../img/arrow.png";

const ImageViewer = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [index, setIndex] = useState(0); // will track our current image;
  const [popupActive, setPopupActive] = useState(false);

  const updateImage = (i) => {
    setIndex(i);
  };

  const handleImageClick = (i) => {
    updateImage(i);
    setPopupActive(!popupActive);
  };

  const handleLeftArrowClick = () => {
    if (index > 0) {
      updateImage(index - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (index < images.length - 1) {
      updateImage(index + 1);
    }
  };

  const handleCloseBtnClick = () => {
    setPopupActive(!popupActive);
  };

  return (
    <div>
      <div
        className={`popup ${popupActive ? "active" : ""}`}
        style={{ marginTop: "100px" }}
      >
        {/* top bar */}
        <div className="top-bar">
          <p className="image-name">{`img${index + 1}.png`}</p>
          <span className="close-btn" onClick={handleCloseBtnClick} />
        </div>
        {/* arrows */}
        <button className="arrow-btn left-arrow" onClick={handleLeftArrowClick}>
          <img src={arrow} alt="" />
        </button>
        <button
          className="arrow-btn right-arrow"
          onClick={handleRightArrowClick}
        >
          <img src={arrow} alt="" />
        </button>
        {/* image */}
        <img
          src={images[index]}
          className="large-image"
          alt={`img${index + 1}`}
        />
        {/* image-index */}
        <h1 className="index">{`0${index + 1}`}</h1>
      </div>
      <div className="gallery">
        {images.map((image, i) => (
          <div key={i} className="gallery-image">
            <img
              src={image}
              alt={`img${i + 1}`}
              className="image"
              onClick={() => handleImageClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
