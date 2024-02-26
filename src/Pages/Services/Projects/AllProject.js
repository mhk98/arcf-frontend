import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllProjectsBannerQuery } from "../../../Redux/features/projectBanner/projectBanner";
import { useGetAllProjectsQuery } from "../../../Redux/features/projects/projects";
import { useGetAllProjectsDetailsQuery } from "../../../Redux/features/projectsDetails/projectsDetails";
const AllProject = () => {
  const [projects, setProjects] = useState([]);

  const { data, isLoading, isError, error } = useGetAllProjectsQuery();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setProjects(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const filteredData = projects.filter(
    (item) => !["Donation", "Home", "Footer"].includes(item.page)
  );

  const [banner, setBanner] = useState("");

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetAllProjectsBannerQuery();

  useEffect(() => {
    if (isError1) {
      console.error("Error fetching projects data", error1);
    } else if (!isLoading1) {
      if (data1) {
        setBanner(data1.data);
      }
    }
  }, [data1, isLoading1, isError1, error1]);

  const [projectDetails, setProjectDetails] = useState("");
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useGetAllProjectsDetailsQuery();

  useEffect(() => {
    if (isError2) {
      console.error("Error fetching projects data", error2);
    } else if (!isLoading2) {
      if (data2) {
        setProjectDetails(data2.data);
      }
    }
  }, [data2, isLoading2, isError2, error2]);

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <div>
      {isLoading1 ? (
        <h2>Loading...</h2>
      ) : banner ? (
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
                <h2>{item.title}</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No slider found</h2>
      )}

      <section className="product-details1">
        <div className="container">
          {isLoading2 ? (
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
          ) : projectDetails ? (
            projectDetails.map((item) => (
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="col-lg-6 col-xl-6 mb-5">
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

                <div className="col-lg-6 col-xl-4">
                  <div className="product-details__img">
                    <img
                      src={`https://server.arcfbd.org/${item.image}`}
                      alt=""
                      style={{ width: 370, height: 382 }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-center">No project details found</h2>
          )}
        </div>
      </section>

      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="row">
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
            ) : filteredData.length > 0 ? (
              filteredData.map((project) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link
                    to={`/project/${project.Id}`}
                    onClick={() => handleMenuClick()}
                  >
                    <div className="causes-one__single">
                      <div className="causes-one__img">
                        {/* <img
                          src={`https://server.arcfbd.org/${project.image}`}
                          alt=""
                        /> */}

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
                            <img
                              className="slider-img"
                              src={`https://server.arcfbd.org/${project.image1}`}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className="slider-img"
                              src={`https://server.arcfbd.org/${project.image2}`}
                              alt=""
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className="slider-img"
                              src={`https://server.arcfbd.org/${project.image3}`}
                              alt=""
                            />
                          </SwiperSlide>
                        </Swiper>

                        <div className="causes-one__cat">
                          <p className="mt-2">{project.title}</p>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">{project.title}</h3>
                        <p
                          className="causes-one__text"
                          style={{ color: "black" }}
                        >
                          <span>{project.text}</span>
                          <span className="ms-2">
                            <Link
                              to={`/project/${project.Id}`}
                              style={{ fontWeight: "bold" }}
                            >
                              Learn more...
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <h2 className="text-center">No project found</h2>
            )}
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default AllProject;
