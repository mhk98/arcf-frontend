import React from "react";

const Home = () => {
  return (
    <div>
      <div className="preloader">
        <div className="preloader__image" />
      </div>
      {/* /.preloader */}
      <div className="page-wrapper">
        {/*Main Slider Start*/}
        <section className="main-slider clearfix">
          <div
            className="swiper-container thm-swiper__slider"
            data-swiper-options='{"slidesPerView": 1, "loop": true,
          "effect": "fade",
          "pagination": {
          "el": "#main-slider-pagination",
          "type": "bullets",
          "clickable": true
          },
          "navigation": {
          "nextEl": "#main-slider__swiper-button-next",
          "prevEl": "#main-slider__swiper-button-prev"
          },
          "autoplay": {
          "delay": 5000
          }}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-1.jpg)",
                  }}
                />
                {/* /.image-layer */}
                <div
                  className="main-slider-shape-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/main-slider-shape-1.jpg)",
                  }}
                />
                <div className="main-slider-shape-2 float-bob-x">
                  <img src="assets/images/shapes/main-slider-shape-2.png" alt />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-8">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">
                          Empathy Empowers Change
                        </p>
                        <h2 className="main-slider__title">
                          Poverty is not natural
                        </h2>
                        <div className="main-slider__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn main-slider__btn"
                          >
                            {" "}
                            Discover more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-2.jpg)",
                  }}
                />
                {/* /.image-layer */}
                <div
                  className="main-slider-shape-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/main-slider-shape-1.jpg)",
                  }}
                />
                <div className="main-slider-shape-2 float-bob-x">
                  <img src="assets/images/shapes/main-slider-shape-2.png" alt />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-8">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">
                          Compassion Ignites Change
                        </p>
                        <h2 className="main-slider__title">
                          You can be that great generation
                        </h2>
                        <div className="main-slider__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn main-slider__btn"
                          >
                            {" "}
                            Discover more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-1-3.jpg)",
                  }}
                />
                {/* /.image-layer */}
                <div
                  className="main-slider-shape-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/main-slider-shape-1.jpg)",
                  }}
                />
                <div className="main-slider-shape-2 float-bob-x">
                  <img src="assets/images/shapes/main-slider-shape-2.png" alt />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-8">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">
                          Charity Unleashes Hope
                        </p>
                        <h2 className="main-slider__title">
                          Let your greatness blossom
                        </h2>
                        <div className="main-slider__btn-box">
                          <a
                            href="about.html"
                            className="thm-btn main-slider__btn"
                          >
                            {" "}
                            Discover more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
              >
                <i className="icon-left-arrow" />
              </div>
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
              >
                <i className="icon-right-arrow" />
              </div>
            </div>
          </div>
        </section>
        {/*Main Slider End*/}
        {/*About One Start*/}
        <section className="about-one">
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
            <div className="row">
              <div className="col-xl-6">
                <div className="about-one__left">
                  <div
                    className="about-one__img-box wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="about-one__img">
                      <img
                        src="assets/images/resources/about-one-img-1.jpg"
                        alt
                      />
                    </div>
                    <div className="about-one__img-border" />
                    <div className="about-one__curved-circle-box">
                      <div className="curved-circle">
                        <span className="curved-circle--item">
                          25 YEARS EXPERIENCE OXPINS CHARITY CENTER
                        </span>
                      </div>
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
                    <div className="about-one__shape-4 zoominout">
                      <img
                        src="assets/images/shapes/about-one-shape-4.png"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Welcome to ARC Foundation
                    </span>
                    <h2 className="section-title__title">
                      Helping each other can make world better
                    </h2>
                  </div>
                  <p className="about-one__text">
                    Transforming Lives Through Research, and Changes. Body Text:
                    We are delighted to have you join our community dedicated to
                    Advocacy, Research, and Change. Together, let's embark on a
                    journey of positively impacting, fostering resilience, and
                    creating a better world. Your presence enriches our mission,
                    and we look forward to achieving meaningful milestones
                    together.
                  </p>
                  <div className="about-one__fund">
                    <p className="about-one__fund-text">
                      Helped fund <span>24,537</span> Projects in
                      <span>24</span> Countries, Benefiting over <br />{" "}
                      <span>8.2</span> Million people.
                    </p>
                  </div>
                  <ul className="list-unstyled about-one__points">
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
                  </ul>
                  <a href="about.html" className="thm-btn about-one__btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End*/}
        {/*Causes One Start*/}
        <section className="causes-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Help &amp; donate us
              </span>
              <h2 className="section-title__title">
                Join Us in Making <br /> a Difference Today
              </h2>
            </div>
            <div className="row">
              {/*Causes One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <img src="assets/images/resources/causes-1-1.jpg" alt />
                    <div className="causes-one__cat">
                      <p>Education</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="donation-details.html">
                        Support Education for Underprivileged Children.
                      </a>
                    </h3>
                    <p className="causes-one__text">
                      Join us in shaping a better tomorrow for deserving
                      children.
                    </p>
                    <div className="causes-one__progress">
                      <div
                        className="causes-one__progress-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                        }}
                      ></div>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="36%">
                          <div className="count-text">36%</div>
                        </div>
                      </div>
                      <div className="causes-one__goals">
                        <p>
                          <span>$25,270</span> Raised
                        </p>
                        <p>
                          <span>$30,000</span> Goal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Causes One Single End*/}
              {/*Causes One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <img src="assets/images/resources/causes-1-2.jpg" alt />
                    <div className="causes-one__cat">
                      <p>Medical</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="donation-details.html">
                        Support Medical Care for Underprivileged Children.
                      </a>
                    </h3>
                    <p className="causes-one__text">
                      Your support brings medical care to underprivileged
                      children. Donate today!
                    </p>
                    <div className="causes-one__progress">
                      <div
                        className="causes-one__progress-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                        }}
                      ></div>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="36%">
                          <div className="count-text">36%</div>
                        </div>
                      </div>
                      <div className="causes-one__goals">
                        <p>
                          <span>$25,270</span> Raised
                        </p>
                        <p>
                          <span>$30,000</span> Goal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Causes One Single End*/}
              {/*Causes One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <img src="assets/images/resources/causes-1-3.jpg" alt />
                    <div className="causes-one__cat">
                      <p>Poverty </p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="donation-details.html">
                        Help underprivileged children escape poverty.
                      </a>
                    </h3>
                    <p className="causes-one__text">
                      Global efforts uplift underprivileged children affected by
                      poverty.
                    </p>
                    <div className="causes-one__progress">
                      <div
                        className="causes-one__progress-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                        }}
                      ></div>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="36%">
                          <div className="count-text">36%</div>
                        </div>
                      </div>
                      <div className="causes-one__goals">
                        <p>
                          <span>$25,270</span> Raised
                        </p>
                        <p>
                          <span>$30,000</span> Goal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Causes One Single End*/}
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
                backgroundImage:
                  "url(assets/images/backgrounds/become-volunteer-one-bg.jpg)",
              }}
            />
          </div>
          <div
            className="become-volunteer-one__shape-1"
            style={{
              backgroundImage:
                "url(assets/images/shapes/become-volunteer-shape-1.png)",
            }}
          />
          <div className="container">
            <div className="become-volunteer-one__inner">
              <p className="become-volunteer-one__sub-title">
                Become a Volunteers
              </p>
              <h3 className="become-volunteer-one__title">
                Join your hand with us for a <br /> better life and future
              </h3>
              <div className="become-volunteer-one__btn-box">
                <a
                  href="become-volunteer.html"
                  className="thm-btn become-volunteer-one__btn"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Become Volunteer One End*/}
        {/*Events One Start*/}
        <section className="events-one">
          <div
            className="events-one-shape-1"
            style={{
              backgroundImage:
                "url(assets/images/shapes/events-one-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="events-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Upcoming events
                    </span>
                    <h2 className="section-title__title">
                      Join our latest upcoming events
                    </h2>
                  </div>
                  <p className="events-one__text-1">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered.
                  </p>
                  <a
                    href="event-details.html"
                    className="thm-btn events-one__btn"
                  >
                    Discover More
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="events-one__right">
                  <div
                    className="events-one__carousel owl-carousel owl-theme thm-owl__carousel"
                    data-owl-options='{
                          "loop": true,
                          "autoplay": true,
                          "margin": 20,
                          "nav": true,
                          "dots": false,
                          "smartSpeed": 500,
                          "autoplayTimeout": 10000,
                          "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
                          "responsive": {
                              "0": {
                                  "items": 1
                              },
                              "768": {
                                  "items": 2
                              },
                              "992": {
                                  "items": 2
                              },
                              "1200": {
                                  "items": 3
                              }
                          }
                      }'
                  >
                    <div className="item">
                      {/*Events One Single Start*/}
                      <div className="events-one__single">
                        <div className="events-one__img">
                          <img src="assets/images/events/events-1-1.jpg" alt />
                          <div className="events-one__date">
                            <p>23 May, 2022</p>
                          </div>
                          <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                              <li>
                                <i className="fas fa-clock" />
                                8:00pm
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                New York
                              </li>
                            </ul>
                            <h3 className="events-one__title">
                              <a href="event-details.html">
                                Play for the world with us
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/*Events One Single End*/}
                    </div>
                    <div className="item">
                      {/*Events One Single Start*/}
                      <div className="events-one__single">
                        <div className="events-one__img">
                          <img src="assets/images/events/events-1-2.jpg" alt />
                          <div className="events-one__date">
                            <p>23 May, 2022</p>
                          </div>
                          <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                              <li>
                                <i className="fas fa-clock" />
                                8:00pm
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                New York
                              </li>
                            </ul>
                            <h3 className="events-one__title">
                              <a href="event-details.html">
                                Contrary to popular belief
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/*Events One Single End*/}
                    </div>
                    <div className="item">
                      {/*Events One Single Start*/}
                      <div className="events-one__single">
                        <div className="events-one__img">
                          <img src="assets/images/events/events-1-3.jpg" alt />
                          <div className="events-one__date">
                            <p>23 May, 2022</p>
                          </div>
                          <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                              <li>
                                <i className="fas fa-clock" />
                                8:00pm
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                New York
                              </li>
                            </ul>
                            <h3 className="events-one__title">
                              <a href="event-details.html">
                                There are many variations of
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/*Events One Single End*/}
                    </div>
                    <div className="item">
                      {/*Events One Single Start*/}
                      <div className="events-one__single">
                        <div className="events-one__img">
                          <img src="assets/images/events/events-1-1.jpg" alt />
                          <div className="events-one__date">
                            <p>23 May, 2022</p>
                          </div>
                          <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                              <li>
                                <i className="fas fa-clock" />
                                8:00pm
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                New York
                              </li>
                            </ul>
                            <h3 className="events-one__title">
                              <a href="event-details.html">
                                Play for the world with us
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/*Events One Single End*/}
                    </div>
                    <div className="item">
                      {/*Events One Single Start*/}
                      <div className="events-one__single">
                        <div className="events-one__img">
                          <img src="assets/images/events/events-1-2.jpg" alt />
                          <div className="events-one__date">
                            <p>23 May, 2022</p>
                          </div>
                          <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                              <li>
                                <i className="fas fa-clock" />
                                8:00pm
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                New York
                              </li>
                            </ul>
                            <h3 className="events-one__title">
                              <a href="event-details.html">
                                Contrary to popular belief
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/*Events One Single End*/}
                    </div>
                    <div className="item">
                      {/*Events One Single Start*/}
                      <div className="events-one__single">
                        <div className="events-one__img">
                          <img src="assets/images/events/events-1-3.jpg" alt />
                          <div className="events-one__date">
                            <p>23 May, 2022</p>
                          </div>
                          <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                              <li>
                                <i className="fas fa-clock" />
                                8:00pm
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                New York
                              </li>
                            </ul>
                            <h3 className="events-one__title">
                              <a href="event-details.html">
                                There are many variations of
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/*Events One Single End*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Events One End*/}
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
                          <a href="become-volunteer.html">
                            Join us &amp; become <br /> a volunteer
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="feature-one__text">
                    Mauris feugiat at orci ac congue. mauris ut <br /> lacus
                    quis proin diam.
                  </p>
                  <ul className="list-unstyled feature-one__point">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Sed et nulla a nunc finibus eleifend.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Mauris nulla nisl, pellentesque vetae.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Proin quis aliquam nisi.</p>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="become-volunteer.html"
                    className="thm-btn feature-one__btn"
                  >
                    View details
                  </a>
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
                          <a href="about.html">
                            Send a gift for <br />
                            childrens
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="feature-one__text">
                    Mauris feugiat at orci ac congue. mauris ut <br /> lacus
                    quis proin diam.
                  </p>
                  <ul className="list-unstyled feature-one__point">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Sed et nulla a nunc finibus eleifend.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Mauris nulla nisl, pellentesque vetae.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Proin quis aliquam nisi.</p>
                      </div>
                    </li>
                  </ul>
                  <a href="about.html" className="thm-btn feature-one__btn">
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Feature One End*/}
        {/*Brand One Start*/}
        <section className="brand-one">
          <div className="container">
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                      "0": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "375": {
                          "spaceBetween": 30,
                          "slidesPerView": 2
                      },
                      "575": {
                          "spaceBetween": 30,
                          "slidesPerView": 3
                      },
                      "767": {
                          "spaceBetween": 50,
                          "slidesPerView": 4
                      },
                      "991": {
                          "spaceBetween": 50,
                          "slidesPerView": 5
                      },
                      "1199": {
                          "spaceBetween": 100,
                          "slidesPerView": 6
                      }
                  }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-6.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-6.png" alt />
                </div>
                {/* /.swiper-slide */}
              </div>
            </div>
          </div>
        </section>
        {/*Brand One End*/}
        {/*Testimonial One Start*/}
        <section className="testimonial-one">
          <div
            className="testimonial-one-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/testimonial-one-bg.jpg)",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="testimonial-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Our Testimonials
                    </span>
                    <h2 className="section-title__title">
                      What they are talking about oxpins
                    </h2>
                  </div>
                  <p className="testimonial-one__text-1">
                    Nulla ultricies justo sit amet ante efficitur, eget pharetra
                    augue efficitur. Vestibulum viverra, dolor sit amet
                    ultricies ornare, elit justo pretium tellus.
                  </p>
                  <a href="#" className="thm-btn testimonial-one__btn">
                    all testimonials
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="testimonial-one__right">
                  <div className="testimonial-one__img-1 zoom-fade">
                    <img
                      src="assets/images/testimonial/testimonial-img-1.jpg"
                      alt
                    />
                  </div>
                  <div className="testimonial-one__img-1 testimonial-one__img-2 zoom-fade">
                    <img
                      src="assets/images/testimonial/testimonial-img-2.jpg"
                      alt
                    />
                  </div>
                  <div className="testimonial-one__img-1 testimonial-one__img-3 zoom-fade">
                    <img
                      src="assets/images/testimonial/testimonial-img-3.jpg"
                      alt
                    />
                  </div>
                  <div className="testimonial-one__img-1 testimonial-one__img-4 zoom-fade">
                    <img
                      src="assets/images/testimonial/testimonial-img-4.jpg"
                      alt
                    />
                  </div>
                  <div
                    className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
                    data-owl-options='{
                          "loop": true,
                          "autoplay": true,
                          "margin": 50,
                          "nav": true,
                          "dots": false,
                          "smartSpeed": 500,
                          "autoplayTimeout": 10000,
                          "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
                          "responsive": {
                              "0": {
                                  "items": 1
                              },
                              "768": {
                                  "items": 1
                              },
                              "992": {
                                  "items": 1
                              },
                              "1200": {
                                  "items": 1
                              }
                          }
                      }'
                  >
                    <div className="item">
                      {/*Testimonial One Single Start*/}
                      <div className="testimonial-one__single">
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                        ></div>
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Kevin martin
                          </h3>
                          <p className="testimonial-one__client-sub-title">
                            Volunteer
                          </p>
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-double-quotes" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Nulla ultricies justo sit amet ante efficitur, eget
                          pharetra augue efficitur. Vestibulum viverra, dolor
                          sit amet ultricies simply free text ornare, elit justo
                          pretium tellus.
                        </p>
                      </div>
                      {/*Testimonial One Single End*/}
                    </div>
                    <div className="item">
                      {/*Testimonial One Single Start*/}
                      <div className="testimonial-one__single">
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                        ></div>
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-2.jpg"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Jessica brown
                          </h3>
                          <p className="testimonial-one__client-sub-title">
                            Volunteer
                          </p>
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-double-quotes" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Nulla ultricies justo sit amet ante efficitur, eget
                          pharetra augue efficitur. Vestibulum viverra, dolor
                          sit amet ultricies simply free text ornare, elit justo
                          pretium tellus.
                        </p>
                      </div>
                      {/*Testimonial One Single End*/}
                    </div>
                    <div className="item">
                      {/*Testimonial One Single Start*/}
                      <div className="testimonial-one__single">
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                        ></div>
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-3.jpg"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Mike hardson
                          </h3>
                          <p className="testimonial-one__client-sub-title">
                            Volunteer
                          </p>
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-double-quotes" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Nulla ultricies justo sit amet ante efficitur, eget
                          pharetra augue efficitur. Vestibulum viverra, dolor
                          sit amet ultricies simply free text ornare, elit justo
                          pretium tellus.
                        </p>
                      </div>
                      {/*Testimonial One Single End*/}
                    </div>
                    <div className="item">
                      {/*Testimonial One Single Start*/}
                      <div className="testimonial-one__single">
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                        ></div>
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-1.jpg"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Kevin martin
                          </h3>
                          <p className="testimonial-one__client-sub-title">
                            Volunteer
                          </p>
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-double-quotes" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Nulla ultricies justo sit amet ante efficitur, eget
                          pharetra augue efficitur. Vestibulum viverra, dolor
                          sit amet ultricies simply free text ornare, elit justo
                          pretium tellus.
                        </p>
                      </div>
                      {/*Testimonial One Single End*/}
                    </div>
                    <div className="item">
                      {/*Testimonial One Single Start*/}
                      <div className="testimonial-one__single">
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                        ></div>
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-2.jpg"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Jessica brown
                          </h3>
                          <p className="testimonial-one__client-sub-title">
                            Volunteer
                          </p>
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-double-quotes" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Nulla ultricies justo sit amet ante efficitur, eget
                          pharetra augue efficitur. Vestibulum viverra, dolor
                          sit amet ultricies simply free text ornare, elit justo
                          pretium tellus.
                        </p>
                      </div>
                      {/*Testimonial One Single End*/}
                    </div>
                    <div className="item">
                      {/*Testimonial One Single Start*/}
                      <div className="testimonial-one__single">
                        <div
                          className="testimonial-one__shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shapes/testimonial-one-shape-1.png)",
                          }}
                        ></div>
                        <div className="testimonial-one__client-img">
                          <img
                            src="assets/images/testimonial/testimonial-1-3.jpg"
                            alt
                          />
                        </div>
                        <div className="testimonial-one__client-info">
                          <h3 className="testimonial-one__client-name">
                            Mike hardson
                          </h3>
                          <p className="testimonial-one__client-sub-title">
                            Volunteer
                          </p>
                        </div>
                        <div className="testimonial-one__quote">
                          <span className="icon-double-quotes" />
                        </div>
                        <p className="testimonial-one__text-2">
                          Nulla ultricies justo sit amet ante efficitur, eget
                          pharetra augue efficitur. Vestibulum viverra, dolor
                          sit amet ultricies simply free text ornare, elit justo
                          pretium tellus.
                        </p>
                      </div>
                      {/*Testimonial One Single End*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Testimonial One End*/}
        {/*Gallery One Start*/}
        <section className="gallery-one">
          <div className="gallery-one__top">
            <h3 className="gallery-one__top-title">Our photo gallery</h3>
          </div>
          <div className="gallery-one__bottom">
            <div className="gallery-one__container">
              <ul className="list-unstyled gallery-one__list">
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-1.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-1.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Education</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-2.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-2.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Education</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-3.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-3.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Education</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-4.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-4.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Education</a>
                      </h5>
                    </div>
                  </div>
                </li>
                <li
                  className="gallery-one__single wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-5.jpg" alt />
                    <a
                      href="assets/images/gallery/gallery-1-5.jpg"
                      className="img-popup"
                    />
                    <div className="gallery-one__content">
                      {/* /.img-popup */}
                      <p className="gallery-one__sub-title">Charity</p>
                      <h5 className="gallery-one__title">
                        <a href="gallery.html">Education</a>
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
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
              backgroundImage: "url(assets/images/backgrounds/faq-one-bg.png)",
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
                      People are frequently asking some questions from us
                    </h2>
                  </div>
                  <p className="faq-one__text-1">
                    Proactively procrastinate cross-platform results via
                    extensive ideas distinctively underwhelm enterprise.
                    Compellingly plagiarize value-added sources with inexpensive
                    schemas.
                  </p>
                  <a href="faq.html" className="thm-btn faq-one__btn">
                    Learn how to get help
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="faq-one__right">
                  <div
                    className="accrodion-grp"
                    data-grp-name="faq-one-accrodion"
                  >
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>Nulla eu purus scelerisque, dignissim diam.</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>
                          Quisque non diam porta, ullamcorper dolor sit amet.
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How can I make a change to my application?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div className="accrodion last-chiled">
                      <div className="accrodion-title">
                        <h4>Sed mattis neque sed commodo efficitur.</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
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
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/counter-one-bg.jpg)",
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
              <span className="section-title__tagline">
                News &amp; articles
              </span>
              <h2 className="section-title__title">
                Directly from the <br /> latest news and articles
              </h2>
            </div>
            <div className="row">
              {/*News One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-1-1.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <a href="news-details.html">
                              <i className="far fa-user-circle" /> Admin
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              <i className="fas fa-comments" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <a href="news-details.html">
                            How does the malnutrition affect children?
                          </a>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <a href="news-details.html">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </a>
                        </div>
                        <div className="news-one__share">
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
              {/*News One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-1-2.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <a href="news-details.html">
                              <i className="far fa-user-circle" /> Admin
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              <i className="fas fa-comments" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <a href="news-details.html">
                            Lorem Ipsum has been the industry's standard
                          </a>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <a href="news-details.html">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </a>
                        </div>
                        <div className="news-one__share">
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
              {/*News One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/blog/news-1-3.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <a href="news-details.html">
                              <i className="far fa-user-circle" /> Admin
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">
                              <i className="fas fa-comments" /> 2 Comments
                            </a>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <a href="news-details.html">
                            There are many variations of passages of Lorem
                          </a>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <a href="news-details.html">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </a>
                        </div>
                        <div className="news-one__share">
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*News One Single End*/}
            </div>
          </div>
        </section>
        {/*News One End*/}
      </div>
      {/* /.page-wrapper */}

      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="icon-up-arrow" />
      </a>
    </div>
  );
};

export default Home;
