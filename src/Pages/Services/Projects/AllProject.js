import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../../Redux/features/projects/projects";
import { useGetSingleHealthBannerQuery } from "../../../Redux/features/healthBanner/healthBanner";
import { useGetAllProjectsBannerQuery } from "../../../Redux/features/projectBanner/projectBanner";
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

  return (
    <div>
      {isLoading1 ? (
        <h2>Loading...</h2>
      ) : banner ? (
        banner.map((item) => (
          <section className="page-header">
            <div
              className="page-header-bg"
              style={{
                backgroundImage: `url(https://arcf-backend.onrender.com/${item?.image})`,
              }}
            >
              <img
                src={`https://arcf-backend.onrender.com/${item?.image}`}
                alt=""
              />
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
                <h2>{item.title}</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No banner found</h2>
      )}

      <section className="product-details">
        <div className="container">
          {isLoading2 ? (
            <h2 className="text-center">Loading...</h2>
          ) : projectDetails ? (
            projectDetails.map((item) => (
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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

                <div className="col-lg-6 col-xl-4">
                  <div className="product-details__img">
                    <img
                      src={`https://arcf-backend.onrender.com/${item.image}`}
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
              <h2 className="text-center">Loading...</h2>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <Link to={`/health/${project.category}`}>
                    <div className="causes-one__single">
                      <div className="causes-one__img">
                        <Link to="/health">
                          <img
                            src={`https://arcf-backend.onrender.com/${project.image}`}
                            alt=""
                          />
                        </Link>
                        <div className="causes-one__cat">
                          <p className="mt-2">{project.title}</p>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <Link to="/health">{project.title}</Link>
                        </h3>
                        <p
                          className="causes-one__text"
                          style={{ color: "black" }}
                        >
                          {project.text}
                          <span className="ms-2">
                            <Link to="/health" style={{ fontWeight: "bold" }}>
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
