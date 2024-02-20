import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetSinglenewsCategoryDescriptionQuery } from "../../Redux/features/newsDetails/newsDetails";

const NewsDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } =
    useGetSinglenewsCategoryDescriptionQuery(id);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setNews(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : news ? (
        news.map((item) => (
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
                <h2>{item.category}</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No banner found</h2>
      )}
      {/*Donation Details Start*/}
      <section className="donation-details">
        <div className="container">
          <div className="row">
            {isLoading ? (
              <h3>Loading...</h3>
            ) : news ? (
              news.map((item) => (
                <div className="col-xl-8 col-lg-7">
                  <div className="donation-details__left">
                    <div className="donation-details__top">
                      <div className="donation-details__img">
                        <img
                          src={`http://localhost:5000/${item.image4}`}
                          alt=""
                        />
                      </div>
                      <div className="donation-details__content">
                        <h3 className="donation-details__title">
                          {item.title}
                        </h3>

                        <p className="donation-details__text">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="donation-details__donate">
                      <div
                        className="donation-details__donate-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/donation-details-donate-shape.png)",
                        }}
                      ></div>
                      <div className="donation-details__donate-left">
                        <ul className="list-unstyled donation-details__donate-list">
                          <li>
                            <div className="icon">
                              <span className="icon-solidarity" />
                            </div>
                            <div className="text">
                              <span>Raised</span>
                              <p>$25,270</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-target-1" />
                            </div>
                            <div className="text">
                              <span>Goal</span>
                              <p>$30,000</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="donation-details__donate-btn">
                        <a href="/donate-now" className="thm-btn">
                          Donate now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No news found</h3>
            )}

            {/* <div className="col-xl-4 col-lg-5">
              <div className="donation-details__sidebar">
                <div className="sidebar__post">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="sidebar__title">Latest posts</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {isLoading1 ? (
                      <h3 className="text-center">Loading...</h3>
                    ) : restSidebar.length ? (
                      restSidebar.map((item) => (
                        <li>
                          <Link
                            to={`/project-subcategory-details/${item.projectId}/${item.projectSubCategoryId}`}
                          >
                            <div className="sidebar__post-image">
                              <img
                                src={`http://localhost:5000/${item.image}`}
                                alt=""
                              />
                            </div>
                            <div className="sidebar__post-content">
                              <h3>
                                <span className="sidebar__post-content-meta">
                                  <i className="fas fa-user-circle" /> By admin
                                </span>
                                <a href="">{item.title}</a>
                              </h3>
                            </div>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <h3>No sidebar found</h3>
                    )}
                  </ul>
                </div>
                <div className="donation-details__sidebar-shaare-cause">
                  <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  />
                  <h3 className="donation-details__sidebar-shaare-cause-title">
                    Share
                  </h3>
                  <div className="donation-details__sidebar-shaare-cause-social">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*Donation Details End*/}
    </div>
  );
};

export default NewsDetails;
