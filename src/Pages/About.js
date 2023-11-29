import { jarallax } from "jarallax";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import founder from "../image/about-us/founder.jpg";
import md from "../image/about-us/managing-director.jpg";
const About = () => {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      imgPosition: "50% 0%",
    });
  }, []);
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        />
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
            <h2>About us</h2>
          </div>
        </div>
      </section>

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
                  <span className="section-title__tagline">
                    About Arc Foundation
                  </span>
                  <h2 className="section-title__title">
                    Get to know about our Arc Foundation
                  </h2>
                </div>
                <p className="about-four__text">
                  The ARC Foundation is a non-government, non-profitable,
                  non-political, voluntary, and charitable organization wishing
                  to impact and change people’s lives towards sustainable
                  self-reliance, influencing people not to lose hope but to step
                  up & claim their place and space in all spheres of life
                  through information, empowerment, skills development and
                  providing the necessary resources and mentorship. Our focus is
                  to mobilize communities toward sustainable and responsible
                  development. At ARC Foundation we believe in transformation
                  from poverty to hope, obstacles to opportunities, and from
                  oppression to triumph. At ARC Foundation we celebrate the rich
                  diversity of our country and praise many individuals and
                  organizations who steadfastly remained committed to breaking
                  the cycle of marginalization and poverty in Bangladesh.
                </p>
                <ul className="list-unstyled about-four__points">
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>
                        Overcoming poverty is not a task of charity, it is an
                        act of justice.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Like slavery and apartheid, poverty is not natural.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Sometimes it falls on a generation to be great.</p>
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

      <section class="product-details">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title mb-4">Chairman Message</h3>
              </div>
              <div class="product-details__img">
                <img src={founder} alt="" width={570} height={570} />
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title">
                  About Chairman & Founder{" "}
                </h3>
              </div>

              <div class="product-details__content">
                <p class="product-details__content-text1">
                  he ARC Foundation is a non-government, non-profitable,
                  non-political, voluntary, and charitable organization wishing
                  to impact and change people’s lives towards sustainable
                  self-reliance, influencing people not to lose hope but to step
                  up & claim their place and space in all spheres of life
                  through information, empowerment, skills development and
                  providing the necessary resources and mentorship. Our focus is
                  to mobilize communities toward sustainable and responsible
                  development. At ARC Foundation we believe in transformation
                  from poverty to hope, obstacles to opportunities, and from
                  oppression to triumph. At ARC Foundation we celebrate the rich
                  diversity of our country and praise many individuals and
                  organizations who steadfastly remained committed to breaking
                  the cycle of marginalization and poverty in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title">About Managing Director </h3>
              </div>

              <div class="product-details__content">
                <p class="product-details__content-text1">
                  he ARC Foundation is a non-government, non-profitable,
                  non-political, voluntary, and charitable organization wishing
                  to impact and change people’s lives towards sustainable
                  self-reliance, influencing people not to lose hope but to step
                  up & claim their place and space in all spheres of life
                  through information, empowerment, skills development and
                  providing the necessary resources and mentorship. Our focus is
                  to mobilize communities toward sustainable and responsible
                  development. At ARC Foundation we believe in transformation
                  from poverty to hope, obstacles to opportunities, and from
                  oppression to triumph. At ARC Foundation we celebrate the rich
                  diversity of our country and praise many individuals and
                  organizations who steadfastly remained committed to breaking
                  the cycle of marginalization and poverty in Bangladesh.
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-xl-6">
              <div class="product-details__top">
                <h3 class="product-details__title mb-4">
                  Managing Director Message
                </h3>
              </div>
              <div class="product-details__img">
                <img src={md} alt="" width={570} height={570} />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    People are frequently ask some questions from us.
                  </h2>
                </div>
                <p className="faq-one__text-1">
                  ARC Foundation, a non-profit organization, aims to empower
                  individuals for self-reliance through information, skills
                  development, and mentorship.
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
                      <h4>What is the mission of ARC Foundation?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          The mission of ARC Foundation is to empower
                          individuals for sustainable self-reliance through
                          information, skills development, and mentorship.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>
                        How does ARC Foundation support education in
                        communities?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          ARC Foundation supports community education with
                          resources and skill development.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Can I volunteer with ARC Foundation? How?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Yes, visit our website or contact us for volunteering
                          opportunities.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion last-chiled">
                    <div className="accrodion-title">
                      <h4>
                        What success stories or impact has ARC Foundation
                        achieved so far?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          ARC Foundation has achieved impactful success stories,
                          empowering individuals through education, skills
                          development, and community support.
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
