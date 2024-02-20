import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllNewsBannerQuery } from "../../Redux/features/newsBanner/newsBanner";

import axios from "axios";
import { useGetAllNewsQuery } from "../../Redux/features/news/news";

const News = () => {
  const [newsBanner, setNewsBanner] = useState([]);

  const { data, isLoading, isError, error } = useGetAllNewsBannerQuery();

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching slides data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setNewsBanner(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [newsDetails, setNewsDetails] = useState([]);

  const getAllNewsDetails = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/newsDetails");
    setNewsDetails(res.data.data);
  };

  useEffect(() => {
    getAllNewsDetails();
  }, []);

  const [news, setNews] = useState([]);

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetAllNewsQuery();

  useEffect(() => {
    if (isError1) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching slides data:", error1);
    } else if (!isLoading1) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data1 && data1.data) {
        setNews(data1.data);
      }
    }
  }, [data1, isLoading1, isError1, error1]);

  const upcomingNews = news.filter((news) => news.status === "upcoming");
  const latestNews = news.filter((news) => news.status === "latest");
  console.log("upcomingNews", upcomingNews);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : newsBanner ? (
        newsBanner.map((item) => (
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
                    backgroundImage: `url(http://localhost:5000/${item.image1})`,
                  }}
                >
                  {/* <img src={`http://localhost:5000/${item.image1}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image2})`,
                  }}
                >
                  {/* <img src={`http://localhost:5000/${item.image2}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image3})`,
                  }}
                >
                  {/* <img src={`http://localhost:5000/${item.image3}`} alt="" /> */}
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
                <h2>News</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No slider found</h2>
      )}
      <section className="product-details">
        <div className="container">
          {newsDetails.length ? (
            newsDetails.map((item) => (
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
                      src={`http://localhost:5000/${item.image}`}
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
            <h3>No found news details</h3>
          )}
        </div>
      </section>

      {/*News Page Start*/}
      <section className="news-page">
        <div className="container">
          <div className="row">
            <h3 className="causes-one__title mb-3">
              <Link to="">Upcoming News</Link>
            </h3>

            {upcomingNews.length ? (
              upcomingNews.map((news) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link to={`/news-details/${news.Id}`}>
                    <div className="news-one__single">
                      <div className="news-one__img">
                        <img src={`http://localhost:5000/${news.image}`} alt />
                      </div>
                      <div className="news-one__content-box">
                        <div className="news-one__content-inner">
                          <div className="news-one__content">
                            <h3 className="news-one__title">{news.title}</h3>
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
              <h3>No found upcomingNews</h3>
            )}
          </div>
          <div className="row">
            <h3 className="causes-one__title mb-3">
              <Link to="">Latest News</Link>
            </h3>

            {latestNews.length ? (
              latestNews.map((item) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link to={`/news-details/${item.Id}`}>
                    <div className="news-one__single">
                      <div className="news-one__img">
                        <img src={`http://localhost:5000/${item.image}`} alt />
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
              <h3>No found upcomingNews</h3>
            )}
          </div>
        </div>
      </section>
      {/*News Page End*/}
    </div>
  );
};

export default News;
