import React from "react";
import { Link } from "react-router-dom";

const Health = () => {
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
            <h2>Health</h2>
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
          <h3 className="section-title__title" style={{ fontWeight: "bold" }}>
            Health
          </h3>

          <p
            className="causes-one__text"
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            ARC Foundation's Health Care Program is a lifeline for those in
            need. We provide vital medical assistance, support for treatments,
            and ensure access to essential healthcare services. Join us in
            promoting well-being and creating a healthier, more resilient
            community.
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
              <Link to="/donate-details" style={{ color: "black" }}>
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/">
                      <img src="assets/images/resources/p-2.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Free Clinic</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/donate-details">Free Friday Clinic</Link>
                    </h3>
                    <p className="causes-one__text">
                      A Free Friday Clinic for poor families to be aware or
                      provide doctor’s advice or prescription free of cost and
                      providing free medicine.
                      <span className="ms-2">
                        <Link to="/donate-details">see more...</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="donate-details" style={{ color: "black" }}>
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/donate-details">
                      <img src="assets/images/resources/p-2.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Medical Support</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/donate-details">
                        Medical Treatment Support
                      </Link>
                    </h3>
                    <p className="causes-one__text">
                      Medical support initiative to the poor community by
                      ensuring reduced cost medical treatment & medicine
                      facilities from our partner
                      <span className="ms-2">
                        <Link to="/donate-details">see more...</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/donate-details">
                <div className="causes-one__single" style={{ color: "black" }}>
                  <div className="causes-one__img">
                    <Link to="/donate-details">
                      <img src="assets/images/resources/p-2.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Cancer Treatment</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/donate-details">Cancer Treatment</Link>
                    </h3>
                    <p className="causes-one__text">
                      Financial assistance is provided for the treatment of poor
                      and indigent patients suffering from Blood Cancer, Women's
                      Breast Cancer
                      <span className="ms-2">
                        <Link to="/donate-details">see more...</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/donate-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/donate-details">
                      <img src="assets/images/resources/p-2.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Child Program</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/donate-details">
                        Maternal and Child Program
                      </Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                    ARC Foundation's Maternal & Child Program Ensures Health, Education, and Support for Every Mother and Child.
                      <span className="ms-2">
                        <Link to="/donate-details">see more...</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/donate-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/donate-details">
                      <img src="assets/images/resources/p-2.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Medical Camp</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/donate-details">Health & Medical Camp</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Health awareness training and Free medical camps are
                      conducted in rural and remote areas.
                      <span className="ms-2">
                        <Link to="/donate-details">see more...</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default Health;
