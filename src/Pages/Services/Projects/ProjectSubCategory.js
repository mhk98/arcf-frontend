import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetSingleProjectSubCategoryQuery } from "../../../Redux/features/projectSubCategory/projectSubCategory";
import { useGetSingleProjectSubCategoryHeaderQuery } from "../../../Redux/features/projectSubCategoryHeader/projectSubCategoryHeader";

const ProjectSubCategory = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } =
    useGetSingleProjectSubCategoryQuery(id);
  const [categories, setCategories] = useState([]);

  console.log("categories", categories);
  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setCategories(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [banner, setBanner] = useState("");

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetSingleProjectSubCategoryHeaderQuery(id);

  useEffect(() => {
    if (isError1) {
      console.error("Error fetching projects data", error1);
    } else if (!isLoading1) {
      if (data1) {
        setBanner(data1.data);
      }
    }
  }, [data1, isLoading1, isError1, error1]);

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <div>
      <div>
        {/*Page Header Start*/}
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
                  <h2>{item.category}</h2>
                </div>
              </div>
            </section>
          ))
        ) : (
          <h2 className="text-center">No banner found</h2>
        )}
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

        {isLoading1 ? (
          <h2>Loading...</h2>
        ) : banner ? (
          banner.map((item) => (
            <section className="product-details">
              <div className="container">
                <div
                  className="row"
                  style={{ alignItems: "center", gap: "50px" }}
                >
                  <div className="col-lg-6 col-xl-4">
                    <div className="product-details__img">
                      <img
                        src={`https://server.arcfbd.org/${item.image4}`}
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
              </div>
            </section>
          ))
        ) : (
          <h2 className="text-center">No description found</h2>
        )}

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
                          <img
                            src={`https://server.arcfbd.org/${category.image}`}
                            alt=""
                          />

                          <div className="causes-one__cat">
                            <p className="mt-2">{category.category}</p>
                          </div>
                        </div>
                        <div className="causes-one__content">
                          <h3 className="causes-one__title">
                            {category.title}
                          </h3>
                          <p
                            className="causes-one__text"
                            style={{ color: "black" }}
                          >
                            {category.text}

                            <span className="ms-2">
                              <Link
                                onClick={() => handleMenuClick()}
                                to={`/project-subcategory-details/${category.projectId}/${category.Id}`}
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
