import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
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
            <h2>Education</h2>
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
            Education
          </h3>

          <p
            className="causes-one__text"
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            ARC Foundation's Education and Child Development Program is shaping
            futures. We provide quality education, support holistic child
            development, and empower young minds. Join us in building a
            foundation for success and transforming lives.
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
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Night School</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">
                      Night School for Working and Street Children
                    </Link>
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
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="causes-one__single">
                <div className="causes-one__img">
                  <Link to="/donate-details">
                    <img src="assets/images/resources/p-1.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Education Scholarship</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">Education Scholarship</Link>
                  </h3>
                  <p className="causes-one__text">
                    One-time and multi-term scholarships are provided to poor
                    and meritorious students to continue their studies.
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
                    <p className="mt-2">Free Books and Other Educational</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">
                      Free Books and Other Educational Goods Distribution
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    Books, all kinds of educational materials, computers, etc.
                    are distributed free of cost to poor students.
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

export default Education;
