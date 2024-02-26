import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllGalleryCategoryDescriptionQuery } from "../Redux/features/galleryBannerDescription/galleryBannerDescription";
import arrow from "../img/arrow.png";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const { data, isLoading, isError, error } =
    useGetAllGalleryCategoryDescriptionQuery();

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching donation data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setGallery(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  console.log("gallery", gallery);

  const [images, setImages] = useState([]);

  const getAllImage = async () => {
    const res = await axios.get(
      "https://server.arcfbd.org/api/v1/imageGallery"
    );
    setImages(res.data.data);
  };
  const [videos, setVideos] = useState([]);

  const getAllVideo = async () => {
    const res = await axios.get(
      "https://server.arcfbd.org/api/v1/videoGallery"
    );
    setVideos(res.data.data);
  };

  useEffect(() => {
    getAllImage();
    getAllVideo();
  }, []);

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
    <div style={{ marginBottom: "100px" }}>
      {gallery ? (
        gallery.map((item) => (
          <section className="page-header">
            <Swiper
              className="page-header-bg"
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0} // Adjust space between slides if needed
              slidesPerView={1}
              effect="fade"
              loop={true}
              autoplay={{ delay: 5000 }}
            >
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image1})`,
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image2})`,
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image3})`,
                  }}
                ></div>
              </SwiperSlide>
              {/* Add more SwiperSlides if needed */}
            </Swiper>

            <div className="container">
              <div className="page-header__inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li className="active">Pages</li>
                </ul>
                <h2>{item.title}</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h3 className="text-center">No banner found</h3>
      )}

      <section className="product-details">
        <div className="container">
          {isLoading ? (
            <Button
              style={{
                backgroundColor: "#00715D",
                border: "none",
              }}
              disabled
            >
              <Spinner
                style={{ textAlign: "center" }}
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : gallery ? (
            gallery.map((item) => (
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="col-lg-6 col-xl-6">
                  <div className="product-details__top">
                    <h3 className="product-details__title">{item.title}</h3>
                  </div>
                  <div className="product-details__reveiw" />
                  <div className="product-details__content">
                    <p>{item.text}</p>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="product-details__img">
                    <img
                      src={`https://server.arcfbd.org/${item.image4}`}
                      alt=""
                      style={{ width: 370, height: 382 }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-center">No gallery details found</h2>
          )}
        </div>
      </section>
      {/*Gallery Page Start*/}

      <section className="gallery-one">
        <div>
          <div className={`popup ${popupActive ? "active" : ""}`}>
            {/* top bar */}
            <div className="top-bar">
              <span className="close-btn" onClick={handleCloseBtnClick}>
                X
              </span>
            </div>
            {/* arrows */}
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
            {/* Check if images are available before trying to access */}
            {images.length > 0 && (
              <>
                {/* image */}
                <img
                  src={`https://server.arcfbd.org/${images[index].image}`}
                  className="large-image"
                  alt={`img${index + 1}`}
                />
                {/* image-index */}
                {/* <h1 className="index">{`0${index + 1}`}</h1> */}
              </>
            )}
          </div>

          <div className="container">
            <h2 className="causes-one__title text-center mb-5">
              Photo Gallery
            </h2>
            <div className="row">
              {images.map((image, i) => (
                <div key={i} className="col-xl-3 mb-3">
                  <img
                    src={`https://server.arcfbd.org/${image.image}`}
                    alt={`img${i + 1}`}
                    className="image"
                    onClick={() => handleImageClick(i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-one mt-5">
        <div>
          <div className="container">
            <h2 className="causes-one__title text-center mb-5">
              Video Gallery
            </h2>
            <div className="">
              <div className="row">
                {videos.map((item) => (
                  <div className="col-xl-3 mb-3" key={item.id}>
                    <div style={{ cursor: "pointer" }}>
                      <iframe
                        width="310"
                        height="250"
                        src={item.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen // corrected attribute name
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Gallery Page End*/}
    </div>
  );
};

export default Gallery;
