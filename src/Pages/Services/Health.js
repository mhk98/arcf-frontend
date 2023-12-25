import React from "react";
import h1 from "../../image/health/Free-friday-clinic.jpg";
import h2 from "../../image/health/Medical-treatment-low-cot.jpg";
import h3 from "../../image/health/Cancer-treatment.jpg";
import h4 from "../../image/health/Maternal and Child Immunization Program.jpg";
import h5 from "../../image/health/Health-Awareness-&-Medical.jpg";
import h6 from "../../image/health/Health-Care-Program-(Inside).jpg";

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
                <a href="/">Home</a>
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
          <a href="/projects">
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
          </a>
        </div>
      </div>

      <section className="product-details">
        <div className="container">
          <div className="row" style={{ alignItems: "center", gap: "50px" }}>
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">Health Care Program</h3>
              </div>
              <div className="product-details__reveiw" />
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  Dive into the heart of impactful change with ARC Foundation
                  Events. Our events serve as powerful platforms for bringing
                  communities together in the spirit of empowerment, education,
                  and sustainable development. From engaging workshops to
                  thought-provoking symposiums, each event is a catalyst for
                  positive transformation. Discover a space where like-minded
                  individuals, partners, and supporters unite to amplify our
                  mission. Whether it's a fundraiser, awareness campaign, or
                  collaborative initiative, ARC Foundation Events offer a
                  dynamic showcase of our commitment to creating lasting impact.
                  Join us at these inspiring gatherings as we collectively
                  strive to build a brighter, more inclusive future for all.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="product-details__img">
                <img src={h6} alt="" style={{ width: 370, height: 382 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <a href="/donate-details" style={{ color: "black" }}>
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <a href="/">
                      <img src={h1} alt />
                    </a>
                    <div className="causes-one__cat">
                      <p className="mt-2">Free Clinic</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="/donate-details">Free Friday Clinic</a>
                    </h3>
                    <p className="causes-one__text">
                      A Free Friday Clinic for poor families to be aware or
                      provide doctor’s advice or prescription free of cost and
                      providing free medicine.
                      <span className="ms-2">
                        <a
                          href="/donate-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <a href="donate-details" style={{ color: "black" }}>
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <a href="/donate-details">
                      <img src={h2} alt />
                    </a>
                    <div className="causes-one__cat">
                      <p className="mt-2">Medical Support</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="/donate-details">Medical Treatment low cost</a>
                    </h3>
                    <p className="causes-one__text">
                      Medical support initiative to the poor community by
                      ensuring reduced cost medical treatment & medicine
                      facilities from our partner
                      <span className="ms-2">
                        <a
                          href="/donate-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <a href="/donate-details">
                <div className="causes-one__single" style={{ color: "black" }}>
                  <div className="causes-one__img">
                    <a href="/donate-details">
                      <img src={h3} alt />
                    </a>
                    <div className="causes-one__cat">
                      <p className="mt-2">Cancer Treatment</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="/donate-details">Cancer Treatment</a>
                    </h3>
                    <p className="causes-one__text">
                      Financial assistance is provided for the treatment of poor
                      and indigent patients suffering from Blood Cancer
                      patients.
                      <span className="ms-2">
                        <a
                          href="/donate-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <a href="/donate-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <a href="/donate-details">
                      <img src={h4} alt="" />
                    </a>
                    <div className="causes-one__cat">
                      <p className="mt-2">Child Program</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="/donate-details">
                        Maternal and Child Immunization Program
                      </a>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Mothers and Children are vaccinated every week.
                      <span className="ms-2">
                        <a
                          href="/donate-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <a href="/donate-details">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <a href="/donate-details">
                      <img src={h5} alt="" />
                    </a>
                    <div className="causes-one__cat">
                      <p className="mt-2">Medical Camp</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="/donate-details">Health Awareness & Medical</a>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Health awareness training and Free medical camps are
                      conducted in rural and remote areas.
                      <span className="ms-2">
                        <a
                          href="/donate-details"
                          style={{ fontWeight: "bold" }}
                        >
                          see more...
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </div>
  );
};

export default Health;
