import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllAboutARCFQuery } from "../../Redux/features/aboutARCF/aboutARCF";
import { useGetAllAssistantViceChairmanQuery } from "../../Redux/features/assistantViceChairman/assistantViceChairman";
import { useGetAllBannerQuery } from "../../Redux/features/banner/banner";
import { useGetAllChairmanQuery } from "../../Redux/features/chairman/chairman";
import { useGetAllCurrentChairmanQuery } from "../../Redux/features/currentChairman/currentChairman";
import { useGetAllDirectorQuery } from "../../Redux/features/director/Director";
import { useGetAllFaqQuery } from "../../Redux/features/faq/faq";
import { useGetAllManagementQuery } from "../../Redux/features/management/management";
import { useGetAllViceChairmanQuery } from "../../Redux/features/viceChairman/viceChairman";
import { useGetAllVolunteerQuery } from "../../Redux/features/volunteer/volunteer";
import "./About.css";

const About = () => {
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

  const { data } = useGetAllBannerQuery();

  const banner = data?.data;

  const { data: data1 } = useGetAllAboutARCFQuery();
  const aboutARCF = data1?.data;

  const { data: data2 } = useGetAllChairmanQuery();
  const chairman = data2?.data;

  const { data: data3 } = useGetAllCurrentChairmanQuery();
  const currentChairman = data3?.data;

  const { data: data4 } = useGetAllViceChairmanQuery();
  const viceChairman = data4?.data;

  const { data: data5 } = useGetAllAssistantViceChairmanQuery();
  const assistantViceChairman = data5?.data;

  const { data: data6 } = useGetAllDirectorQuery();
  const director = data6?.data;
  const { data: data7 } = useGetAllManagementQuery();
  const management = data7?.data;
  const { data: data8 } = useGetAllVolunteerQuery();
  const volunteer = data8?.data;

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div>
      {banner ? (
        banner.map((item) => (
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
                    backgroundImage: `url(http://localhost:5000/${item.image1})`,
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image2})`,
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image3})`,
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

      {/*About Four Start*/}
      <section className="about-four">
        <div className="container">
          {aboutARCF ? (
            aboutARCF.map((about) => (
              <div className="row">
                <div className="col-xl-6">
                  <div className="about-four__left">
                    <div className="about-four__img-box">
                      <div className="about-four__img">
                        <img
                          src={`http://localhost:5000/${about.image1}`}
                          alt=""
                        />
                      </div>
                      <div className="about-four__img-two">
                        <img
                          src={`http://localhost:5000/${about.image2}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="about-four__right">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        {about.title}
                      </span>
                      <h2 className="section-title__title">{about.heading}</h2>
                    </div>
                    <p className="about-four__text">{about.text}</p>
                    <ul className="list-unstyled about-four__points">
                      <li>
                        <div className="icon">
                          <i className="fa fa-check" />
                        </div>
                        <div className="text">
                          <p>{about.point1}</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fa fa-check" />
                        </div>
                        <div className="text">
                          <p> {about.point2}</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fa fa-check" />
                        </div>
                        <div className="text">
                          <p> {about.point3}</p>
                        </div>
                      </li>
                    </ul>
                    <div className="about-four__btn-box">
                      <Link
                        to="/contact"
                        onClick={() => handleMenuClick()}
                        className="thm-btn about-four__btn"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No about found</h3>
          )}
        </div>
      </section>
      {/*About Four End*/}

      <section class="product-details">
        <div class="container">
          {chairman ? (
            chairman.map((item) => (
              <div class="row align-items-center">
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__img">
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__top">
                    <h3 class="product-details__title">{item.title}</h3>
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  </div>

                  <div class="product-details__content">
                    <p class="product-details__content-text1">{item.text}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No chairman available</h3>
          )}
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          {currentChairman ? (
            currentChairman.map((item) => (
              <div class="row align-items-center">
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__top">
                    <h3 class="product-details__title">{item.title} </h3>

                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  </div>

                  <div class="product-details__content">
                    <p class="product-details__content-text1">{item.text}</p>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__img">
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center">No found ViceChairman Info</h3>
          )}
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          {viceChairman ? (
            viceChairman.map((item) => (
              <div class="row align-items-center ">
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__img">
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__top">
                    <h3 class="product-details__title">{item.title}</h3>
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  </div>

                  <div class="product-details__content">
                    <p class="product-details__content-text1">{item.text}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center">No found ViceChairman Info</h3>
          )}
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          {assistantViceChairman ? (
            assistantViceChairman.map((item) => (
              <div class="row align-items-center">
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__top">
                    <h3 class="product-details__title">{item.title}</h3>

                    <p style={{ fontWeight: "bold" }}> {item.name}</p>
                  </div>

                  <div class="product-details__content">
                    <p class="product-details__content-text1">{item.text}</p>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__img">
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No found ViceChairman Info</h3>
          )}
        </div>
      </section>

      <section class="product-details">
        <div class="container">
          {director ? (
            director.map((item) => (
              <div class="row align-items-center">
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__img">
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      width={570}
                      height={570}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6">
                  <div class="product-details__top">
                    <h3 class="product-details__title">{item.title} </h3>
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  </div>

                  <div class="product-details__content">
                    <p class="product-details__content-text1">{item.text}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No found Executive Director Info</h3>
          )}
        </div>
      </section>

      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="row">
            <h2 className="product-details__title mb-5 text-center">
              Our Management Team
            </h2>

            {management ? (
              management.map((team) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src={`http://localhost:5000/${team.image}`} alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link to=" ">{team.name}</Link>
                      </h3>
                      <p className="team-one__sub-title">{team.designation}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No found management member</h3>
            )}
          </div>
        </div>
      </section>
      {/*Team One End*/}
      {/*Team One Start*/}
      <section className="team-one" style={{ marginTop: "-80px" }}>
        <div className="container">
          <div className="row">
            <h2 className="product-details__title mb-5 text-center">
              Our Volunteer Team
            </h2>

            {volunteer ? (
              volunteer.map((member) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img
                        src={`http://localhost:5000/${member.image}`}
                        alt=""
                      />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link to=" "> {member.name}</Link>
                      </h3>
                      <p className="team-one__sub-title">Volunteer</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No found volunteer Info</h3>
            )}
          </div>
        </div>
      </section>
      {/*Team One End*/}

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
              <Link
                to="/contact"
                onClick={() => handleMenuClick()}
                className="thm-btn become-volunteer-one__btn"
              >
                Discover More
              </Link>
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
                <Link
                  to="/contact"
                  onClick={() => handleMenuClick()}
                  className="thm-btn faq-one__btn"
                >
                  Learn how to get help
                </Link>
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
      {/*FAQ One End*/}
    </div>
  );
};

export default About;
