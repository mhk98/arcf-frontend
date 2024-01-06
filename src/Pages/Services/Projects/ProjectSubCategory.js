import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProjectSubCategoryQuery } from "../../../Redux/features/projectSubCategory/projectSubCategory";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import inside from "../../../image/health/Health-Care-Program-(Inside).jpg";
import banner from "../../../image/health/page-header-bg.jpg"

const ProjectSubCategory = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } =
    useGetSingleProjectSubCategoryQuery(id);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setCategories(data.data);
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
    <div style={{ marginTop: "200px" }}>
      <div>
        {/*Page Header Start*/}
        <section className="page-header">
          <Swiper
            className="page-header-bg"
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0} // Adjust space between slides if needed
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide>
              <div
                className="page-header-bg"
                style={{
                  backgroundImage:
                    `url(${banner})`
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="page-header-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/project-banner.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="page-header-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/page-header-bg.jpg)",
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
              <h2>Health</h2>
            </div>
          </div>
        </section>
        {/*Page Header End*/}

        <Link to="/projects" onClick={() => handleMenuClick()}>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FBD45A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
              }}
            >
              <i
                style={{
                  fontSize: "25px",
                  color: "black",
                  cursor: "pointer",
                }}
                className="icon-left-arrow"
              />
            </div>
          </div>
        </Link>

        <section className="product-details">
          <div className="container">
            <div className="row" style={{ alignItems: "center", gap: "50px" }}>
              <div className="col-lg-6 col-xl-4">
                <div className="product-details__img">
                  <img
                    src={inside}
                    alt=""
                    style={{ width: 370, height: 382 }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="product-details__top">
                  <h3 className="product-details__title">
                    Education and Child Development Program
                  </h3>
                </div>
                <div className="product-details__reveiw" />
                <div className="product-details__content">
                  <p className="product-details__content-text1">
                    Dive into the heart of impactful change with ARC Foundation
                    Events. Our events serve as powerful platforms for bringing
                    communities together in the spirit of empowerment,
                    education, and sustainable development. From engaging
                    workshops to thought-provoking symposiums, each event is a
                    catalyst for positive transformation. Discover a space where
                    like-minded individuals, partners, and supporters unite to
                    amplify our mission. Whether it's a fundraiser, awareness
                    campaign, or collaborative initiative, ARC Foundation Events
                    offer a dynamic showcase of our commitment to creating
                    lasting impact. Join us at these inspiring gatherings as we
                    collectively strive to build a brighter, more inclusive
                    future for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Team One Start*/}
        <section className="team-one">
          <div className="container">
            <div className="row">
              {isLoading ? (
                <h3>Loading...</h3>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <Link
                      to={`/project-subcategory-details/${category.projectId}/${category.Id}`}
                      onClick={() => handleMenuClick()}
                    >
                      <div className="causes-one__single">
                        <div className="causes-one__img">
                          <Link
                            to="/donate-details"
                            onClick={() => handleMenuClick()}
                          >
                            <img
                              src={`http://localhost:5000/${category.image}`}
                              alt=""
                            />
                          </Link>
                          <div className="causes-one__cat">
                            <p className="mt-2">{category.category}</p>
                          </div>
                        </div>
                        <div className="causes-one__content">
                          <h3 className="causes-one__title">
                            <Link
                              to="/donate-details"
                              onClick={() => handleMenuClick()}
                            >
                              {category.title}
                            </Link>
                          </h3>
                          <p
                            className="causes-one__text"
                            style={{ color: "black" }}
                          >
                            {category.text}

                            <span className="ms-2">
                              <Link
                                onClick={() => handleMenuClick()}
                                to="/donate-details"
                                style={{ fontWeight: "bold" }}
                              >
                                see more...
                              </Link>
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <h3>No subcategory found</h3>
              )}
            </div>
          </div>
        </section>
        {/*Team One End*/}
      </div>
    </div>
  );
};

export default ProjectSubCategory;
