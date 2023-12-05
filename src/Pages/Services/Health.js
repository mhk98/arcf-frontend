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

      <div className="text-center" style={{ marginTop: "80px" }}>
        <h6 style={{ fontWeight: "bold" }}>Health</h6>
        <p>Health Care Program</p>
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
                  <Link to="/">
                    <img src="assets/images/resources/p-2.jpg" alt />
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
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Medical Support</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">
                      Medical Treatment Support Initiative with a reduced cost
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    Medical support initiative to the poor community by ensuring
                    reduced cost medical treatment & medicine facilities from
                    our partner Nostrum Hospital & Diagnostic Centre.
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
                    <img src="assets/images/resources/p-2.jpg" alt />
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
                    Breast Cancer, Uterine Cancer, and all other cancer
                    patients.
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
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Child Program</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">
                      Maternal and Child Immunization Program
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    Mothers and Children are vaccinated every week.
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
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </Link>
                  <div className="causes-one__cat">
                    <p className="mt-2">Medical Camp</p>
                  </div>
                </div>
                <div className="causes-one__content">
                  <h3 className="causes-one__title">
                    <Link to="/donate-details">
                      Health Awareness & Medical Camp
                    </Link>
                  </h3>
                  <p className="causes-one__text">
                    Health awareness training and Free medical camps are
                    conducted in rural and remote areas.
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

export default Health;
