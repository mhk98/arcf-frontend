import React from "react";
import { Link } from "react-router-dom";

const News = () => {
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
            <h2>News</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      <div className="container">
        <div className="text-center" style={{ marginTop: "80px" }}>
          <h3 className="causes-one__title" style={{ fontWeight: "bold" }}>
            News
          </h3>

          <p
            className="causes-one__text"
            style={{ textAlign: "left", fontSize: "18px" }}
          >
            ARC Foundation empowers lives through education, health, and
            community initiatives. From scholarships to healthcare access, we're
            committed to fostering equality, supporting education, and driving
            sustainable development. Join us in creating positive change and
            transforming communities.
          </p>
        </div>
      </div>
      {/*News Page Start*/}
      <section className="news-page">
        <div className="container">
          <div className="row">
            <h3 className="causes-one__title mb-3">
              <Link to="">Upcoming News</Link>
            </h3>
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-1.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            How does the malnutrition affect children?
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Lorem Ipsum has been the industry's standard
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-3.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            There are many variations of passages of Lorem
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-4.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-5.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Aenean sollicitudin leo nunc, nec ornare enim
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-6.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Donec a scelerisque nibh. Cras laoreet tellus
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
          </div>
          <div className="row">
            <h3 className="causes-one__title mb-3">
              <Link to="">Latest News</Link>
            </h3>
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-1.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            How does the malnutrition affect children?
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-2.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Lorem Ipsum has been the industry's standard
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-3.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            There are many variations of passages of Lorem
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-4.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-5.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Aenean sollicitudin leo nunc, nec ornare enim
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
            {/*News One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <Link to="/news-details">
                <div className="news-one__single">
                  <div className="news-one__img">
                    <img src="assets/images/resources/p-6.jpg" alt />
                  </div>
                  <div className="news-one__content-box">
                    <div className="news-one__content-inner">
                      <div className="news-one__content">
                        <ul className="list-unstyled news-one__meta">
                          <li>
                            <Link to="/news-details">
                              <i className="far fa-user-circle" /> Admin
                            </Link>
                          </li>
                          <li>
                            <Link to="/news-details">
                              <i className="fas fa-comments" /> 2 Comments
                            </Link>
                          </li>
                        </ul>
                        <h3 className="news-one__title">
                          <Link to="/news-details">
                            Donec a scelerisque nibh. Cras laoreet tellus
                          </Link>
                        </h3>
                      </div>
                      <div className="news-one__bottom">
                        <div className="news-one__read-more">
                          <Link to="/news-details">
                            {" "}
                            <span className="icon-right-arrow" /> Read More
                          </Link>
                        </div>
                        <div className="news-one__share">
                          <Link to="#">
                            <i className="fas fa-share-alt" />
                          </Link>
                        </div>
                      </div>
                      <div className="news-one__social-box">
                        <ul className="list-unstyled news-one__social">
                          <li>
                            <Link to="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-one__date">
                      <p>23 May, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*News One Single End*/}
          </div>
        </div>
      </section>
      {/*News Page End*/}
    </div>
  );
};

export default News;
