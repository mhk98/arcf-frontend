import { jarallax } from "jarallax";
import React, { useEffect, useState } from "react";
import { WOW } from "wowjs";
import { useGetAllFaqQuery } from "../Redux/features/faq/faq";
import { useGetAllSliderQuery } from "../Redux/features/slider/slider";
import bg from "../assets/images/backgrounds/become-volunteer-one-bg.jpg";
import h2 from "../image/Helping-each-other-can-make-world-better.png";
import h1 from "../image/What-We-Do.png";
// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Components/ImageViewer.css";
import BkashPayment from "../Components/PaymentOption/BkashPayment";
import NagadPayment from "../Components/PaymentOption/NagadPayment";
import OnlinePayment from "../Components/PaymentOption/OnlinePayment";
import UpayPayment from "../Components/PaymentOption/UpayPayment";
import Register from "../Components/Register";
import { useGetAllaboutQuery } from "../Redux/features/about/about";
import bkashPayment from "../image/payment/bkash-payment1.jpg";
import nagadPayment from "../image/payment/nagad-payment.jpg";
import onlinePayment from "../image/payment/online-payment.png";
import upayPayment from "../image/payment/upay-payment.jpg";

import axios from "axios";
import { useGetAllDonationQuery } from "../Redux/features/donation/donation";
import { useGetAllNewsQuery } from "../Redux/features/news/news";
import { useGetAllProjectsQuery } from "../Redux/features/projects/projects";
import arrow from "../img/arrow.png";
const Home = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW();
    wow.init();
  }, []);

  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      imgPosition: "50% 0%",
    });
  }, []);

  const [slides, setSlides] = useState([]);
  const { data, isLoading, isError, error } = useGetAllSliderQuery();

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching slides data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setSlides(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  console.log("slides");

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [faqes, setFaqes] = useState([]);
  const {
    data: faqData,
    isLoading: faqLoading,
    isError: faqError,
    error: error1,
  } = useGetAllFaqQuery();

  useEffect(() => {
    if (faqError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching cart data:", error1);
    } else if (!faqLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (faqData && faqData.data) {
        setFaqes(faqData.data);
      }
    }
  }, [faqData, faqLoading, faqError, error1]);

  const [abouts, setAbouts] = useState([]);
  const {
    data: aboutData,
    isLoading: aboutLoading,
    isError: aboutError,
    error: error2,
  } = useGetAllaboutQuery();

  useEffect(() => {
    if (aboutError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching cart data:", error2);
    } else if (!aboutLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (aboutData && aboutData.data) {
        setAbouts(aboutData.data);
      }
    }
  }, [aboutData, aboutLoading, aboutError, error2]);

  console.log("aboutData", aboutData);

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  // const images = [img1, img2, img3, img4, img5];

  const [gallery, setGallery] = useState([]);

  const getAllImage = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/imageGallery");
    setGallery(res.data.data);
  };

  useEffect(() => {
    getAllImage();
  }, []);

  console.log("gallery", gallery);
  const images = gallery.filter((item) => item.page === "Home");

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

  const [projects, setProjects] = useState([]);

  const {
    data: projectData,
    isLoading: isProjectLoading,
    isError: isProjectError,
    error: projectError,
  } = useGetAllProjectsQuery();

  const homeProject = projects.filter((project) => project.page === "Home");

  useEffect(() => {
    if (isProjectError) {
      console.error("Error fetching projects data", projectError);
    } else if (!isProjectLoading) {
      if (projectData) {
        setProjects(projectData.data);
      }
    }
  }, [projectData, isProjectLoading, isProjectError, projectError]);

  const [donation, setDonation] = useState([]);

  const {
    data: donationData,
    isLoading: isDonationLoading,
    isError: isDonationError,
    error: donationError,
  } = useGetAllDonationQuery();

  const homeDonation = donation.filter((item) => item.page === "Home");

  useEffect(() => {
    if (isDonationError) {
      console.error("Error fetching projects data", donationError);
    } else if (!isDonationLoading) {
      if (donationData) {
        setDonation(donationData.data);
      }
    }
  }, [donationData, isDonationLoading, isDonationError, donationError]);

  const [news, setNews] = useState([]);

  const {
    data: newsData,
    isLoading: isNewsLoading,
    isError: isNewsError,
    error: newsError,
  } = useGetAllNewsQuery();

  const homeNews = news.slice(0, 3);

  useEffect(() => {
    if (isNewsLoading) {
      console.error("Error fetching projects data", newsError);
    } else if (!isNewsLoading) {
      if (newsData) {
        setNews(newsData.data);
      }
    }
  }, [newsData, isNewsLoading, isNewsError, newsError]);

  return (
    <div className="custom-cursor">
      {/* /.preloader */}
      <div className="page-wrapper">
        {/* /.stricky-header */}

        <section className="main-slider clearfix">
          <div className="swiper-container thm-swiper__slider">
            {isLoading ? (
              <h3 className="text-center">Loading...</h3>
            ) : slides.length ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                // loop={true}
                effect="fade"
                direction="horizontal"
                pagination={{
                  clickable: true,
                  el: "#main-slider-pagination",
                }}
                navigation={{
                  nextEl: ".swiper-button-next", // Use class selector
                  prevEl: ".swiper-button-prev", // Use class selector
                }}
                // autoplay={{
                //   delay: 5000,
                // }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div
                        className="image-layer"
                        style={{
                          backgroundImage: `url(http://localhost:5000/${slide?.image})`,
                        }}
                      ></div>

                      <div className="main-slider-shape-2 float-bob-x">
                        <img
                          src="assets/images/shapes/main-slider-shape-2.png"
                          alt=""
                        />
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-6 col-lg-8">
                            <div className="main-slider__content">
                              <p className="main-slider__sub-title">
                                {slide.title}
                              </p>
                              <h2 className="main-slider__title">
                                {slide.text}
                              </h2>
                              <div class="main-slider__btn-box">
                                <Link
                                  to="/contact"
                                  class="thm-btn main-slider__btn"
                                >
                                  Discover more
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <h3>No banner found</h3>
            )}

            {/* If we need navigation buttons */}
            <div className="main-slider__nav">
              <div className="swiper-button-prev">
                <i className="icon-left-arrow" />
              </div>
              <div className="swiper-button-next">
                <i className="icon-right-arrow" />
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* <h2 className="section-title__title text-center">
            Welcome to ARC Foundation
          </h2> */}

          <div className="about-one">
            <div className="container">
              {abouts.length > 0 ? (
                abouts.map((about) => (
                  <div className="row " style={{ alignItems: "center" }}>
                    <div
                      className="col-xl-6 wow fadeInUp"
                      data-wow-delay="100ms"
                      // data-wow-duration="2500ms"
                      style={{ marginTop: "-20px" }}
                    >
                      <div className="about-one__right">
                        <div className="section-title text-left">
                          <h2 className="section-title__title">
                            {about.title}
                            {/* What We Do */}
                          </h2>
                        </div>

                        <p>{about.text}</p>

                        {/* <div className="about-one__fund">
                      <p className="about-one__fund-text">
                        Helped fund <span>24,537</span> Projects in
                        <span>24</span> Countries, Benefiting over <br />{" "}
                        <span>8.2</span> Million people.
                      </p>
                    </div> */}
                        {/* <ul className="list-unstyled about-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-volunteer" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="become-volunteer.html">Join ARCF Team</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-solidarity" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="donate-now.html">Start Donate</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                    </ul> */}
                      </div>
                    </div>
                    <div className="col-xl-6 ">
                      <div className="about-one__left ">
                        <div
                          className="col-xl-6 col-lg-6 wow fadeInUp"
                          data-wow-delay="100ms"
                        >
                          <div className="what_we_do">
                            {/* <img className="imageWithShadow" src={h1} alt="" /> */}

                            <Swiper
                              modules={[Navigation, Pagination, Autoplay]}
                              slidesPerView={1}
                              effect="fade"
                              loop={true}
                              autoplay={{
                                delay: 5000,
                              }}
                              className="my-slider" // Add a class to the Swiper container
                            >
                              <SwiperSlide>
                                <img className="slider-img" src={h1} alt="" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img className="slider-img" src={h1} alt="" />
                              </SwiperSlide>
                              <SwiperSlide>
                                <img className="slider-img" src={h1} alt="" />
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="text-center">No Image found</h3>
              )}
            </div>
          </div>
        </section>
        <section>
          {/* <h2 className="section-title__title text-center">
            Welcome to ARC Foundation
          </h2> */}

          <div className="about-one">
            <div className="about-one__shape-box-1">
              <div
                className="about-one__shape-1"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/about-one-shape-1.png)",
                }}
              />
            </div>
            <div className="container">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="col-xl-6">
                  <div className="about-one__left">
                    <div
                      className="about-one__img-box wow slideInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="2500ms"
                    >
                      <div className="about-one__img">
                        <img src={h2} alt="" />
                      </div>
                      <div className="about-one__img-border" />
                      <div className="about-one__curved-circle-box">
                        {/* <div className="curved-circle">
                          <span className="curved-circle--item">
                            25 YEARS EXPERIENCE OXPINS CHARITY CENTER
                          </span>
                        </div> */}
                        {/* /.curved-circle */}
                        <div className="about-one__curved-circle-icon">
                          <img
                            src="assets/images/icon/curved-circle-icon.png"
                            alt
                          />
                        </div>
                      </div>
                      <div className="about-one__shape-2 zoom-fade">
                        <img
                          src="assets/images/shapes/about-one-shape-2.png"
                          alt
                        />
                      </div>
                      <div className="about-one__shape-3 float-bob-y">
                        <img
                          src="assets/images/shapes/about-one-shape-3.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-one__right">
                    <div className="section-title text-left">
                      <h2 className="section-title__title">
                        Helping each other can make world better
                      </h2>
                    </div>
                    <p className="about-one__text">
                      Transforming Lives Through Research, and Changes. Body
                      Text: We are delighted to have you join our community
                      dedicated to Advocacy, Research, and Change. Together,
                      let's embark on a journey of positively impacting,
                      fostering resilience, and creating a better world. Your
                      presence enriches our mission, and we look forward to
                      achieving meaningful milestones together.
                    </p>
                    {/* <div className="about-one__fund">
                      <p className="about-one__fund-text">
                        Helped fund <span>24,537</span> Projects in
                        <span>24</span> Countries, Benefiting over <br />{" "}
                        <span>8.2</span> Million people.
                      </p>
                    </div> */}
                    {/* <ul className="list-unstyled about-one__points">
                      <li>
                        <div className="icon">
                          <span className="icon-volunteer" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="become-volunteer.html">Join ARCF Team</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-solidarity" />
                        </div>
                        <div className="text">
                          <h5>
                            <a href="donate-now.html">Start Donate</a>
                          </h5>
                          <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                        </div>
                      </li>
                    </ul> */}
                    <a href="/donate-now" className="thm-btn about-one__btn">
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End*/}

        {/*Feature One Start*/}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6  wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="feature-one__single">
                  <div
                    className="feature-one__single-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}
                  />
                  <div className="feature-one__top">
                    <div className="feature-one__top-inner">
                      <div className="feature-one__top-icon">
                        <span className="icon-help" />
                      </div>
                      <div className="feature-one__top-title-box">
                        <h3 className="feature-one__top-title">
                          <a href="become-volunteer.html">Our Mission</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="feature-one__text">
                    ARC Foundation endeavors to unleash the potential of
                    disadvantaged youth, men, women, people with disabilities,
                    and children to succeed in life through providing education,
                    specialized creche, health care, livelihood skills, and
                    community development services.
                  </p>

                  {/* <ul className="list-unstyled feature-one__point">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Old age people.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Children & Women.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Enlightened lives.</p>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="become-volunteer.html"
                    className="thm-btn feature-one__btn"
                  >
                    View details
                  </a> */}
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6  wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="feature-one__single feature-one__single--two">
                  <div
                    className="feature-one__single-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/feature-one-shape-1.png)",
                    }}
                  />
                  <div className="feature-one__top">
                    <div className="feature-one__top-inner">
                      <div className="feature-one__top-icon feature-one__top-icon--two">
                        <span className="icon-gift-box" />
                      </div>
                      <div className="feature-one__top-title-box">
                        <h3 className="feature-one__top-title">
                          <a href="about.html">Our Vision</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="feature-one__text">
                    ARC Foundation envisions a society where old age people,
                    children, women & deprived people enjoy secure, healthy,
                    enlightened lives and a responsive environment that promotes
                    their social, economic, cultural, and moral development.
                  </p>
                  {/* <ul className="list-unstyled feature-one__point">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Providing education.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Livelihood skills.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Community development services</p>
                      </div>
                    </li>
                  </ul>
                  <a href="about.html" className="thm-btn feature-one__btn">
                    View details
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Feature One End*/}

        {/*Causes One Start*/}
        <section className="causes-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Our Projects</h2>
            </div>
            <div className="row">
              {homeProject.length ? (
                homeProject.map((project) => (
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="causes-one__single">
                      <div className="causes-one__img">
                        <Link to="/health">
                          <img
                            src={`http://localhost:5000/${project.image1}`}
                            alt=""
                          />
                        </Link>
                        <div className="causes-one__cat">
                          <p className="mt-2">{project.category}</p>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">{project.title}</h3>

                        <p>{project.item}</p>

                        <Link to="/projects" className="thm-btn about-one__btn">
                          See More
                        </Link>
                        {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3>No project found</h3>
              )}
            </div>
          </div>
        </section>
        {/*Causes One End*/}

        {/*Become Volunteer One Start*/}
        <section className="become-volunteer-one">
          <div className="become-volunteer-one__bg-box">
            <div
              className="become-volunteer-one__bg jarallax"
              data-jarallax
              data-speed="0.2"
              data-imgposition="50% 0%"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            />
          </div>
          <div
            className="become-volunteer-one__shape-1"
            style={{
              backgroundImage: `url('assets/images/shapes/become-volunteer-shape-1.png')`,
            }}
          />
          <div className="container">
            <div className="become-volunteer-one__inner">
              <p className="become-volunteer-one__sub-title">
                Become a Volunteer
              </p>
              <h3 className="become-volunteer-one__title">
                Join us for a better life and <br /> future for poor people.
              </h3>
              <Register />
            </div>
          </div>
        </section>
        {/*Become Volunteer One End*/}

        <section className="causes-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Donation</h2>
            </div>
            <div className="row">
              {homeDonation.length ? (
                homeDonation.map((item) => (
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="causes-one__single">
                      <div className="causes-one__img">
                        <img
                          src={`http://localhost:5000/${item.image}`}
                          alt=""
                        />

                        <div className="causes-one__cat">
                          <p className="mt-2">{item.category}</p>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">{item.title}</h3>
                        <p>{item.text}</p>

                        <div>
                          <div
                            className="donate-now__payment-info-btn-box"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            <button
                              type="submit"
                              className="thm-btn donate-now__payment-info-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              data-bs-whatever="@mdo"
                            >
                              Donate now
                            </button>
                          </div>

                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                            style={{ display: "none" }}
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <section className="donate-now">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-xl-12 col-lg-11">
                                            <div className="donate-now__left">
                                              <div className="causes-one__img">
                                                <img
                                                  src={`http://localhost:5000/${item.image}`}
                                                  alt=""
                                                />
                                              </div>
                                              <div>
                                                <h3 className="donate-now__title">
                                                  {item.title}
                                                </h3>

                                                <p className="causes-one__text">
                                                  {item.text}
                                                </p>
                                              </div>
                                              <div className="donate-now__enter-donation">
                                                <h3 className="donate-now__title">
                                                  Enter your donation
                                                </h3>
                                                <div className="donate-now__enter-donation-input">
                                                  <p className="donation_currency">
                                                    $
                                                  </p>
                                                  {/* <select className="selectpicker">
                                                <option>$</option>
                                                <option>₤</option>
                                                <option>¥</option>
                                              </select> */}
                                                  <input
                                                    type="text"
                                                    name="donation-money"
                                                    defaultValue=".00"
                                                  />
                                                </div>
                                              </div>
                                              <div className="donate-now__personal-info-box">
                                                <h3 className="donate-now__title">
                                                  Personal info
                                                </h3>
                                                <form className="donate-now__personal-info-form">
                                                  <div className="row">
                                                    <div className="col-xl-6">
                                                      <div className="donate-now__personal-info-input">
                                                        <input
                                                          type="text"
                                                          placeholder="First name"
                                                          name="name"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                      <div className="donate-now__personal-info-input">
                                                        <input
                                                          type="text"
                                                          placeholder="Last name"
                                                          name="last-name"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                      <div className="donate-now__personal-info-input">
                                                        <input
                                                          type="email"
                                                          placeholder="Email address"
                                                          name="email"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                      <div className="donate-now__personal-info-input">
                                                        <input
                                                          type="text"
                                                          placeholder="Phone"
                                                          name="phone"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                      <div className="donate-now__personal-info-input">
                                                        <input
                                                          type="text"
                                                          placeholder="Address"
                                                          name="Address"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                      <div className="donate-now__personal-info-input">
                                                        <select
                                                          className="selectpicker"
                                                          aria-label="Default select example"
                                                        >
                                                          <option selected>
                                                            Country
                                                          </option>
                                                          <option value={1}>
                                                            USA
                                                          </option>
                                                          <option value={2}>
                                                            England
                                                          </option>
                                                          <option value={3}>
                                                            Australia
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="row">
                                                    <div className="col-xl-12">
                                                      <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                                                        <textarea
                                                          name="message"
                                                          placeholder="Write message"
                                                          defaultValue={""}
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </form>
                                              </div>
                                              <div className="donate-now__payment-info">
                                                <h3 className="donate-now__title">
                                                  Payment info
                                                </h3>

                                                <div className="row gap-5">
                                                  <div
                                                    className={`payment-option col-xl-5 ${
                                                      activeButton === 0
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    onClick={() =>
                                                      handleButtonClick(0)
                                                    }
                                                  >
                                                    <p className="">
                                                      {" "}
                                                      Online Payment
                                                    </p>
                                                    <img
                                                      src={onlinePayment}
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div
                                                    className={`payment-option col-xl-5 ${
                                                      activeButton === 1
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    onClick={() =>
                                                      handleButtonClick(1)
                                                    }
                                                  >
                                                    <p className="">
                                                      {" "}
                                                      Nagad Payment
                                                    </p>
                                                    <img
                                                      src={nagadPayment}
                                                      alt=""
                                                    />
                                                  </div>

                                                  <div
                                                    className={`payment-option col-xl-5 ${
                                                      activeButton === 2
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    onClick={() =>
                                                      handleButtonClick(2)
                                                    }
                                                  >
                                                    <p className="">
                                                      {" "}
                                                      Bkash Payment
                                                    </p>
                                                    <img
                                                      src={bkashPayment}
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div
                                                    className={`payment-option col-xl-5 ${
                                                      activeButton === 3
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                    onClick={() =>
                                                      handleButtonClick(3)
                                                    }
                                                  >
                                                    <p className="">
                                                      {" "}
                                                      Upay Payment
                                                    </p>
                                                    <img
                                                      src={upayPayment}
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>

                                                <div className="payment-container">
                                                  {activeButton === 0 && (
                                                    <div>
                                                      <OnlinePayment />
                                                    </div>
                                                  )}
                                                  {activeButton === 1 && (
                                                    <div>
                                                      <NagadPayment />
                                                    </div>
                                                  )}
                                                  {activeButton === 2 && (
                                                    <div>
                                                      <BkashPayment />
                                                    </div>
                                                  )}
                                                  {activeButton === 3 && (
                                                    <div>
                                                      <UpayPayment />
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3>No donation found</h3>
              )}
            </div>
          </div>
        </section>

        {/*Brand One Start*/}

        <section className="brand-one">
          <div className="container">
            <div className="thm-swiper__slider swiper-container">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20} // Adjust spacing between slides for different devices
                slidesPerView={6}
                loop={true}
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={{
                  // Define breakpoints for different screen sizes
                  0: {
                    slidesPerView: 2, // Show 2 slides on smaller screens like mobile devices
                    spaceBetween: 10, // Adjust spacing for smaller screens
                  },
                  768: {
                    slidesPerView: 4, // Show 4 slides on tablets
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 6, // Show 6 slides on larger screens like desktops
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/*Brand One End*/}
        {/*Testimonial One Start*/}

        {/*Testimonial One End*/}
        {/*Gallery One Start*/}
        <section className="gallery-one">
          <div className="gallery-one__top">
            <h3 className="gallery-one__top-title">Our Photo Gallery</h3>
          </div>

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
                    src={`http://localhost:5000/${images[index].image}`}
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
                      src={`http://localhost:5000/${image.image}`}
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
        {/*Gallery One End*/}
        {/*FAQ One Start*/}
        <section className="faq-one">
          <div
            className="faq-one-shape-1"
            style={{
              backgroundImage: "url(assets/images/shapes/faq-one-shape-1.png)",
            }}
          />
          <div
            className="faq-one-bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/faq-one-bg.jpg)",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="faq-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Recently asked questions
                    </span>
                    <h2 className="section-title__title">
                      People are frequently ask some questions from us.
                    </h2>
                  </div>
                  <p className="faq-one__text-1">
                    ARC Foundation, a non-profit organization, aims to empower
                    individuals for self-reliance through information, skills
                    development, and mentorship.
                  </p>
                  <a href="/contact" className="thm-btn faq-one__btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="faq-one__right">
                  <div
                    className="accrodion-grp"
                    data-grp-name="faq-one-accrodion"
                  >
                    {faqes.map((item, index) => (
                      <div
                        key={item.Id}
                        className={`accrodion ${
                          activeAccordion === index ? "active" : ""
                        }`}
                      >
                        <div
                          className="accrodion-title"
                          onClick={() => toggleAccordion(index)}
                        >
                          <h4>{item.question}</h4>
                          <div className="question-icon">
                            {activeAccordion === index ? (
                              // Minus icon when the accordion is open
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <line x1="18" y1="12" x2="6" y2="12"></line>
                              </svg>
                            ) : (
                              // Plus icon when the accordion is closed
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*FAQ One End*/}
        {/*Counter One Start*/}
        <section className="counter-one">
          <div className="container">
            <div className="counter-one__inner">
              <div
                className="counter-one-bg"
                data-jarallax
                data-speed="0.2"
                data-imgposition="50% 0%"
                // style={{
                //   backgroundImage:
                //     "url(assets/images/backgrounds/counter-one-bg.jpg)",
                // }}

                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/site-footer-bg_1920x1200.jpg)",
                }}
              />
              <ul className="list-unstyled counter-one__list">
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={70}>
                      00
                    </h3>
                    <span className="counter-one__letter">m</span>
                  </div>
                  <p className="counter-one__text">Total donation</p>
                </li>
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={48}>
                      00
                    </h3>
                    <span className="counter-one__letter">k</span>
                  </div>
                  <p className="counter-one__text">Projects funded</p>
                </li>
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={38}>
                      00
                    </h3>
                    <span className="counter-one__letter">%</span>
                  </div>
                  <p className="counter-one__text">Kids need help</p>
                </li>
                <li className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count={230}>
                      00
                    </h3>
                    <span className="counter-one__letter" />
                  </div>
                  <p className="counter-one__text">Our volunteers</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*Counter One End*/}
        {/*News One Start*/}
        <section className="news-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">News &amp; Blog</span>
              <h2 className="section-title__title">
                Our Latest & News and Blog
              </h2>
            </div>
            <div className="row">
              {homeNews.length ? (
                homeNews.map((item) => (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <Link to={`/news-details/${item.Id}`}>
                      <div className="news-one__single">
                        <div className="news-one__img">
                          <img
                            src={`http://localhost:5000/${item.image}`}
                            alt=""
                          />
                        </div>
                        <div className="news-one__content-box">
                          <div className="news-one__content-inner">
                            <div className="news-one__content">
                              <h3 className="news-one__title">{item.title}</h3>
                            </div>
                            <div className="news-one__bottom">
                              <div className="news-one__read-more">
                                <Link to="/news-details">
                                  {" "}
                                  <span className="icon-right-arrow" /> Read
                                  More
                                </Link>
                              </div>
                              <div className="news-one__share">
                                <Link to="#">
                                  <i className="fas fa-share-alt" />
                                </Link>
                              </div>
                            </div>
                            <div className="news-one__social-box">
                              <ul className="list-unstyled news-one__social">
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-dribbble" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="news-one__date">
                            <p>23 May, 2022</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <h3>No news found </h3>
              )}
            </div>
          </div>
        </section>
        {/*News One End*/}
      </div>

      {/* /.search-popup */}
      {/* <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="icon-up-arrow" />
      </a> */}
    </div>
  );
};

export default Home;
