import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleHealthQuery } from "../../Redux/features/health/health";
import { useGetSingleHealthBannerQuery } from "../../Redux/features/healthBanner/healthBanner";
import { useGetSingleHealthDetailsQuery } from "../../Redux/features/healthDetails/healthDetails";

const Health = () => {
  const { category } = useParams();
  const [health, setHealth] = useState([]);
  const { data, isLoading, isError, error } = useGetSingleHealthQuery(category);

  console.log("caegory", category);
  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setHealth(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [banner, setBanner] = useState([]);
  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetSingleHealthBannerQuery("Health");

  useEffect(() => {
    if (isError1) {
      console.error("Error fetching projects data", error1);
    } else if (!isLoading1) {
      if (data1) {
        setBanner(data1.data);
      }
    }
  }, [data1, isLoading1, isError1, error1]);
  console.log("data1", banner);

  const [healthDetails, setHealthDetails] = useState([]);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useGetSingleHealthDetailsQuery("Health");

  useEffect(() => {
    if (isError2) {
      console.error("Error fetching projects data", error2);
    } else if (!isLoading2) {
      if (data) {
        setHealthDetails(data2.data);
      }
    }
  }, [data2, isLoading2, isError2, error2]);
  return (
    <div>
      {/*Page Header Start*/}
      {isLoading1 ? (
        <h2>Loading...</h2>
      ) : banner ? (
        <section className="page-header">
          <div
            className="page-header-bg"
            style={{
              backgroundImage: `url(http://localhost:5000/${banner?.image})`,
            }}
          >
            <img src={`http://localhost:5000/${banner?.image}`} alt="" />
          </div>
          <div className="container">
            <div className="page-header__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span className="ms-2">/</span>
                </li>
                <li className="active">Pages</li>
              </ul>
              <h2>{banner.title}</h2>
            </div>
          </div>
        </section>
      ) : (
        <h2 className="text-center">No banner found</h2>
      )}

      <Link to="/projects">
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

      {/*Page Header End*/}
      <section className="product-details">
        <div className="container">
          <div
            className="row"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  {healthDetails.title}
                </h3>
              </div>
              <div className="product-details__reveiw" />
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  {healthDetails.text}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="product-details__img">
                <img
                  src={`http://localhost:5000/${healthDetails.image}`}
                  alt=""
                  style={{ width: 370, height: 382 }}
                />
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
              <h2 className="text-center">Loading...</h2>
            ) : health.length > 0 ? (
              health.map((item) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link
                    to={`/health-category-details/${item.Id}`}
                    style={{ color: "black" }}
                  >
                    <div className="causes-one__single">
                      <div className="causes-one__img">
                        <Link to="/">
                          <img
                            src={`http://localhost:5000/${item.image}`}
                            alt
                          />
                        </Link>
                        <div className="causes-one__cat">
                          <p className="mt-2">{item.title}</p>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <Link to="/donate-details">{item.title}</Link>
                        </h3>
                        <p className="causes-one__text">
                          {item.text}
                          <span className="ms-2">
                            <Link
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
              <h2 className="text-center">No health category found</h2>
            )}
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default Health;
