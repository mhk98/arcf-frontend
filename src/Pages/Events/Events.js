import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";
import { useGetAllEventsBannerQuery } from "../../Redux/features/events/events";

const News = () => {
  const [eventsBanner, setEventsBanner] = useState([]);

  const { data, isLoading, isError, error } = useGetAllEventsBannerQuery();

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching slides data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setEventsBanner(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [eventsDetails, setEventsDetails] = useState([]);

  const getAllEventsDetails = async () => {
    const res = await axios.get(
      "https://server.arcfbd.org/api/v1/eventsDetails"
    );
    setEventsDetails(res.data.data);
  };

  useEffect(() => {
    getAllEventsDetails();
  }, []);

  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    const res = await axios.get("https://server.arcfbd.org/api/v1/events");
    setEvents(res.data.data);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const upcomingEvents = events.filter(
    (events) => events.status === "upcoming"
  );
  const latestEvents = events.filter((events) => events.status === "latest");
  console.log("upcomingNews", upcomingEvents);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : eventsBanner ? (
        eventsBanner.map((item) => (
          <section key={item.Id} className="page-header">
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
                >
                  {/* <img src={`https://server.arcfbd.org/${item.image1}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image2})`,
                  }}
                >
                  {/* <img src={`https://server.arcfbd.org/${item.image2}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image3})`,
                  }}
                >
                  {/* <img src={`https://server.arcfbd.org/${item.image3}`} alt="" /> */}
                </div>
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
                <h2>Events</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No slider found</h2>
      )}
      <section className="product-details">
        <div className="container">
          {eventsDetails.length ? (
            eventsDetails.map((item) => (
              <div
                key={item.Id}
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="col-lg-6 col-xl-4">
                  <div className="product-details__img">
                    <img
                      src={`https://server.arcfbd.org/${item.image}`}
                      alt=""
                      style={{ width: 370, height: 382 }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <div className="product-details__top">
                    <h3 className="product-details__title">{item.title}</h3>
                  </div>
                  <div className="product-details__reveiw" />
                  <div className="product-details__content">
                    <p className="product-details__content-text1">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No found events details</h3>
          )}
        </div>
      </section>

      {/*News Page Start*/}
      <section className="news-page">
        <div className="container">
          <div className="row">
            <h3 className="causes-one__title mb-3">
              <Link to="">Upcoming Events</Link>
            </h3>

            {upcomingEvents.length ? (
              upcomingEvents.map((events) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link to={`/events-details/${events.Id}`}>
                    <div className="news-one__single">
                      <div className="news-one__img">
                        <img
                          src={`https://server.arcfbd.org/${events.image}`}
                          alt=""
                        />
                      </div>
                      <div className="news-one__content-box">
                        <div className="news-one__content-inner">
                          <div className="news-one__content">
                            <h3 className="news-one__title">{events.title}</h3>
                          </div>
                          <div className="news-one__bottom">
                            <div className="news-one__read-more">
                              <Link to="/news-details">
                                {" "}
                                <span className="icon-right-arrow" /> Read More
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
              <h3>No found upcoming Events</h3>
            )}
          </div>
          <div className="row">
            <h3 className="causes-one__title mb-3">
              <Link to="">Latest Events</Link>
            </h3>

            {latestEvents.length ? (
              latestEvents.map((events) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link to={`/events-details/${events.Id}`}>
                    <div className="news-one__single">
                      <div className="news-one__img">
                        <img
                          src={`https://server.arcfbd.org/${events.image}`}
                          alt=""
                        />
                      </div>
                      <div className="news-one__content-box">
                        <div className="news-one__content-inner">
                          <div className="news-one__content">
                            <h3 className="news-one__title">{events.title}</h3>
                          </div>
                          <div className="news-one__bottom">
                            <div className="news-one__read-more">
                              <Link to="/news-details">
                                {" "}
                                <span className="icon-right-arrow" /> Read More
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
              <h3>No found upcoming Events</h3>
            )}
          </div>
        </div>
      </section>
      {/*News Page End*/}
    </div>
  );
};

export default News;
