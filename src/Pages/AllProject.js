import React from "react";
import { Link } from "react-router-dom";

const AllProject = () => {
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
                <span>/</span>
              </li>
              <li className="active">Pages</li>
            </ul>
            <h2>Projects</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      <section className="product-details">
        <div className="container">
          <div className="row" style={{ alignItems: "center", gap: "50px" }}>
            <div className="col-lg-6 col-xl-4">
              <div className="product-details__img">
                <img
                  src="assets/images/shop/product-details-img-1.webp"
                  alt
                  style={{ width: 370, height: 382 }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">Activities</h3>
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
              <Link to="/health">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/health">
                      <img src="assets/images/resources/p-2.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Health</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/health">Health Care Program</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      ARC Foundation's Health Care Program is a lifeline for
                      those in need. We provide vital medical assistance,
                      support for treatments.
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
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/education">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/education">
                      <img src="assets/images/resources/p-6.jpg" alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Education</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/education">Education and Child Program</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      ARC Foundation's Education and Child Development Program
                      is shaping futures. We provide quality education
                      <span className="ms-2">
                        <Link to="/education" style={{ fontWeight: "bold" }}>
                          see more...
                        </Link>
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
              <Link to="/microcredit">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/microcredit">
                      <img src="assets/images/resources/p-4.jpg" alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Microcredit Program</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/microcredit">Microcredit Program</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      ARC Foundation's Micro Entrepreneurship Development
                      Program sparks success. We empower individuals with skills
                      <span className="ms-2">
                        <Link to="/microcredit" style={{ fontWeight: "bold" }}>
                          see more...
                        </Link>
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
              <Link to="/quality-life">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/quality-life">
                      <img src="assets/images/resources/p-3.jpg" alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Improving Quality Of Life</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/quality-life">Improving Quality Of Life</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      ARC Foundation Elevating Lives, Enhancing Futures. Through
                      diverse programs, we focus on improving quality of life,
                      <span className="ms-2">
                        <Link to="/quality-life" style={{ fontWeight: "bold" }}>
                          see more...
                        </Link>
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
              <Link to="/environment">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="environment">
                      <img src="assets/images/resources/p-1.jpg" alt="" />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Environment</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/environment">Environment</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      ARC Foundation Nurturing Nature, Building Sustainability.
                      Join us in our commitment to environmental stewardship
                      <span className="ms-2">
                        <Link to="/environment" style={{ fontWeight: "bold" }}>
                          see more...
                        </Link>
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
              <Link to="/orphanage">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/orphanage">
                      <img src="assets/images/resources/p-7.jpg" alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Orphanage</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/orphanage">Orphanage</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      ARC Foundation's Orphanage Program is a haven of care and
                      opportunity. We provide education, and support for
                      orphaned children.
                      <span className="ms-2">
                        <Link to="/orphanage" style={{ fontWeight: "bold" }}>
                          see more...
                        </Link>
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
              <Link to="/oldhome">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <Link to="/oldhome">
                      <img src="assets/images/resources/p-2.jpg" alt />
                    </Link>
                    <div className="causes-one__cat">
                      <p className="mt-2">Old Home</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <Link to="/oldhome">Old Home</Link>
                    </h3>
                    <p className="causes-one__text" style={{ color: "black" }}>
                      Old Home Program ensures dignity for seniors. We provide
                      companionship and fulfilling environment for elderly
                      residents.
                      <span className="ms-2">
                        <Link to="/oldhome" style={{ fontWeight: "bold" }}>
                          see more...
                        </Link>
                      </span>
                    </p>
                    {/* <div
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
                  </div> */}
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

export default AllProject;
