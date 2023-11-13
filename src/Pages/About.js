import React from "react";

const About = () => {
  return (
    <div>
      {/*About Four Start*/}
      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-four__left">
                <div className="about-four__img-box">
                  <div className="about-four__img">
                    <img
                      src="assets/images/resources/about-four-img-1.jpg"
                      alt
                    />
                  </div>
                  <div className="about-four__img-two">
                    <img
                      src="assets/images/resources/about-four-img-2.jpg"
                      alt
                    />
                  </div>
                  <div className="about-four__border" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">About oxpins</span>
                  <h2 className="section-title__title">
                    Get to know about our oxpins organization
                  </h2>
                </div>
                <p className="about-four__text">
                  Nam ultrices odio a felis lobortis convallis. In ex nunc,
                  ornare non condimentum et, egestas vel massa. Nullam hendrerit
                  felis quis pellentesque porttitor. Aenean lobortis bibendum
                  turpis et auctor. Nam iaculis, lectus vulputate cursus
                  interdum.
                </p>
                <ul className="list-unstyled about-four__points">
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Proin sed magna vel mi suscipit commodo.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Cras aliquet nulla ut varius blandit.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Nulla auctor ipsum sed nisi lis porttitor.</p>
                    </div>
                  </li>
                </ul>
                <div className="about-four__btn-box">
                  <a href="about.html" className="thm-btn about-four__btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Four End*/}
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our testimonials</span>
            <h2 className="section-title__title">
              What they’re talking <br /> about oxpins
            </h2>
          </div>
          <div
            className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
            data-owl-options='{
              "loop": true,
              "autoplay": true,
              "margin": 30,
              "nav": false,
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
                      "items": 2
                  },
                  "1200": {
                      "items": 3
                  }
              }
          }'
          >
            <div className="item">
              {/*Testimonial Two Single Start*/}
              <div className="testimonial-two__single">
                <div className="testimonial-two__img">
                  <img
                    src="assets/images/testimonial/testimonial-2-1.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-two__content">
                  <div
                    className="testimonial-two__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/testimonial-two-shape-1.png)",
                    }}
                  ></div>
                  <p className="testimonial-two__text">
                    This is due to their best service, pricing and customer
                    support. It’s throughly refresing to such a personal touch.
                    Duis aute irure lupsum reprehenderit.
                  </p>
                  <div className="testimonial-two__client-info">
                    <h4 className="testimonial-two__client-name">
                      Sarah albert
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Volunteer
                    </p>
                  </div>
                  <div className="testimonial-two__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {/*Testimonial Two Single End*/}
            </div>
            <div className="item">
              {/*Testimonial Two Single Start*/}
              <div className="testimonial-two__single">
                <div className="testimonial-two__img">
                  <img
                    src="assets/images/testimonial/testimonial-2-2.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-two__content">
                  <div
                    className="testimonial-two__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/testimonial-two-shape-1.png)",
                    }}
                  ></div>
                  <p className="testimonial-two__text">
                    This is due to their best service, pricing and customer
                    support. It’s throughly refresing to such a personal touch.
                    Duis aute irure lupsum reprehenderit.
                  </p>
                  <div className="testimonial-two__client-info">
                    <h4 className="testimonial-two__client-name">
                      Kevin martin
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Volunteer
                    </p>
                  </div>
                  <div className="testimonial-two__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {/*Testimonial Two Single End*/}
            </div>
            <div className="item">
              {/*Testimonial Two Single Start*/}
              <div className="testimonial-two__single">
                <div className="testimonial-two__img">
                  <img
                    src="assets/images/testimonial/testimonial-2-3.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-two__content">
                  <div
                    className="testimonial-two__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/testimonial-two-shape-1.png)",
                    }}
                  ></div>
                  <p className="testimonial-two__text">
                    This is due to their best service, pricing and customer
                    support. It’s throughly refresing to such a personal touch.
                    Duis aute irure lupsum reprehenderit.
                  </p>
                  <div className="testimonial-two__client-info">
                    <h4 className="testimonial-two__client-name">
                      Jessica brown
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Volunteer
                    </p>
                  </div>
                  <div className="testimonial-two__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {/*Testimonial Two Single End*/}
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
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
      {/*FAQ One Start*/}
      <section className="faq-one faq-two">
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
                  Proactively procrastinate cross-platform results via extensive
                  ideas distinctively underwhelm enterprise. Compellingly
                  plagiarize value-added sources with inexpensive schemas.
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
      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our expert team</span>
            <h2 className="section-title__title">
              Meet the team behind <br /> their success story
            </h2>
          </div>
          <div className="row">
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/team-1-1.jpg" alt />
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <a href="team-details.html">Sarah albert</a>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/team-1-2.jpg" alt />
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <a href="team-details.html">Kevin martin</a>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/team-1-3.jpg" alt />
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <a href="team-details.html">Aleesha eve</a>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="team-one__single">
                <div className="team-one__img">
                  <img src="assets/images/team/team-1-4.jpg" alt />
                  <div className="team-one__social">
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="team-one__content">
                  <h3 className="team-one__name">
                    <a href="team-details.html">David cooper</a>
                  </h3>
                  <p className="team-one__sub-title">Volunteer</p>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
          </div>
        </div>
      </section>
      {/*Team One End*/}
      {/*Brand One Start*/}
      <section className="brand-one brand-three">
        <div
          className="brand-two-shape-1"
          style={{
            backgroundImage:
              "url(assets/images/shapes/brand-three-shape-1.png)",
          }}
        ></div>
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
    </div>
  );
};

export default About;
