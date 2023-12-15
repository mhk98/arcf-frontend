import React from "react";
import { Link } from "react-router-dom";

const QualityLife = () => {
  return (
    <div>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
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
            <h2>Men & Women </h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}
      <div
        className="container"
        style={{
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: "50px", top: "50px" }}>
          <Link to="/projects">
            <i
              style={{
                fontSize: "35px",
                padding: "5px",
                backgroundColor: "#FBD45A",
                borderRadius: "100%",
                color: "black",
              }}
              className="icon-left-arrow"
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="text-center" style={{ marginTop: "80px" }}>
          <h3 className="causes-one__title" style={{ fontWeight: "bold" }}>
            Men & Women
          </h3>

          <p
            className="causes-one__text"
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            ARC Foundation Elevating Lives, Enhancing Futures. Through diverse programs, we focus on improving quality of life, fostering positive change, and creating lasting impact in communities.
          </p>
        </div>
      </div>

      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/donate-details">
                    <img src="assets/images/resources/p-3.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Human Aid</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">Human Aid</Link>
                  </h3>
                  <p className="causes-one__text">
                    Regular food, and winter clothing among the helpless,
                    destitute, and orphaned children, and always standing by the
                    side by supporting relief in areas affected by natural
                    disasters.
                    <span className="ms-2">
                      <Link to="/donate-details">see more...</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/donate-details">
                    <img src="assets/images/resources/p-3.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Provide support</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">
                      Provide support to the permanently disabled
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    Financial support initiative for old age people or
                    permanently disabled persons to survive and meet their basic
                    needs.
                    <span className="ms-2">
                      <Link to="/donate-details">see more...</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/donate-details">
                    <img src="assets/images/resources/p-3.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Making House</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">Support for Making House</Link>
                  </h3>
                  <p className="causes-one__text">
                    Helped with manpower and money to build houses for the poor,
                    helpless people, and the homeless affected by natural
                    calamities.
                    <span className="ms-2">
                      <Link to="/donate-details">see more...</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default QualityLife;
