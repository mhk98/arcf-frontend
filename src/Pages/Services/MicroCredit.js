import React from "react";
import { Link } from "react-router-dom";

const MicroCredit = () => {
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
            <h2>Microcredit Program</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      <div className="text-center" style={{ marginTop: "80px" }}>
        <h6 style={{ fontWeight: "bold" }}>Microcredit</h6>
        <p>Microcredit Program</p>
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
                    <p className="mt-2">Free Computer Training</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">Free Computer Training</Link>
                  </h3>
                  <p className="causes-one__text">
                    Free computer training is provided for the skill development
                    of the Educated and Unemployed population with a view to
                    converting them into public resources.
                    <span className="ms-2">
                      <Link to="/donate-details">see more...</Link>
                    </span>
                  </p>
                  <div
                    className="donate-now__payment-info-btn-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      type="submit"
                      className="thm-btn donate-now__payment-info-btn"
                    >
                      Donate now
                    </button>
                  </div>
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
                    <p className="mt-2">Free Sewing Training</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">Free Sewing Training</Link>
                  </h3>
                  <p className="causes-one__text">
                    Free sewing training is given to women to make them
                    self-reliant. And to improve the meaning of life by
                    increasing the employment of women by providing free sewing
                    machines.
                    <span className="ms-2">
                      <Link to="/donate-details">see more...</Link>
                    </span>
                  </p>
                  <div
                    className="donate-now__payment-info-btn-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      type="submit"
                      className="thm-btn donate-now__payment-info-btn"
                    >
                      Donate now
                    </button>
                  </div>
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
                    <p className="mt-2">Entrepreneurship Development</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">Entrepreneurship Development Program</Link>
                  </h3>
                  <p className="causes-one__text">
                    A small entrepreneurship program for disadvantaged working
                    men and women to succeed in life through their developed
                    skills and financial support to small and medium
                    entrepreneurs.
                    <span className="ms-2">
                      <Link to="/donate-details">see more...</Link>
                    </span>
                  </p>
                  <div
                    className="donate-now__payment-info-btn-box"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      type="submit"
                      className="thm-btn donate-now__payment-info-btn"
                    >
                      Donate now
                    </button>
                  </div>
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

export default MicroCredit;
