import React, { useState } from "react";
import img1 from "../../assets/images/resources/p-1.jpg";
import img2 from "../../assets/images/resources/p-2.jpg";
import img3 from "../../assets/images/resources/p-3.jpg";
import img4 from "../../assets/images/resources/p-4.jpg";
import img5 from "../../assets/images/resources/p-5.jpg";
import arrow from "../../img/arrow.png";

const Player = () => {
  //   const images = [img1, img2, img3, img4, img5];

  const images = [
    {
      image: (
        <iframe
          width="300"
          height="320"
          src="https://www.youtube.com/embed/HlVV-Lt8EiE?si=WwXe9EFdbqiqz-u8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen // corrected attribute name
        ></iframe>
      ),
    },
    {
      image: (
        <iframe
          width="300"
          height="320"
          src="https://www.youtube.com/embed/IJLlCFQ-EbQ?si=AczsAI-FcZaWC1sP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen // corrected attribute name
        ></iframe>
      ),
    },
    {
      image: (
        <iframe
          width="300"
          height="320"
          src="https://www.youtube.com/embed/IJLlCFQ-EbQ?si=AczsAI-FcZaWC1sP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen // corrected attribute name
        ></iframe>
      ),
    },
    {
      image: (
        <iframe
          width="300"
          height="320"
          src="https://www.youtube.com/embed/IJLlCFQ-EbQ?si=AczsAI-FcZaWC1sP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen // corrected attribute name
        ></iframe>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
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
      <section className="gallery-one">
        <div className="gallery-one__top">
          <h3 className="gallery-one__top-title">Our Photo Gallery</h3>
        </div>

        <div>
          {/* Popup Section */}
          {popupActive && (
            <div className="popup" style={{ marginTop: "200px" }}>
              {/* Top bar */}
              <div className="top-bar">
                <span className="close-btn" onClick={handleCloseBtnClick}>
                  Close
                </span>
              </div>
              {/* Arrows */}
              <button
                className="arrow-btn left-arrow"
                onClick={handleLeftArrowClick}
              >
                <img src={arrow} alt="" />
              </button>
              <button
                className="arrow-btn right-arrow"
                onClick={handleRightArrowClick}
              >
                <img src={arrow} alt="" />
              </button>
              {/* Image */}
              {images[index].image}
              {/* Image Index */}
              <h1 className="index">{`0${index + 1}`}</h1>
            </div>
          )}

          {/* Gallery Section */}
          <div className="gallery container">
            <div className="row">
              {images.map((item, i) => (
                <div key={i} className="col-md-3 mb-3">
                  <div
                    className="gallery-image"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(i)}
                  >
                    {item.image}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Player;
