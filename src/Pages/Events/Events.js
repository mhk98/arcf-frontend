import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
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
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">Events</li>
            </ul>
            <h2>Events</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*Events Page Start*/}
      <section className="events-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <div className="events-one__single">
                <div className="events-one__img">
                  <img src="assets/images/events/events-page-1-1.jpg" alt />
                  <div className="events-one__date">
                    <p>23 May, 2022</p>
                  </div>
                  <div className="events-one__content">
                    <ul className="list-unstyled events-one__meta">
                      <li>
                        <i className="fas fa-clock" />
                        8:00pm
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        New York
                      </li>
                    </ul>
                    <h3 className="events-one__title">
                      <Link to="/event-details">
                        Play for the world with us
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <div className="events-one__single">
                <div className="events-one__img">
                  <img src="assets/images/events/events-page-1-2.jpg" alt />
                  <div className="events-one__date">
                    <p>23 May, 2022</p>
                  </div>
                  <div className="events-one__content">
                    <ul className="list-unstyled events-one__meta">
                      <li>
                        <i className="fas fa-clock" />
                        8:00pm
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        New York
                      </li>
                    </ul>
                    <h3 className="events-one__title">
                      <Link to="/event-details">
                        Contrary to popular belief
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <div className="events-one__single">
                <div className="events-one__img">
                  <img src="assets/images/events/events-page-1-3.jpg" alt />
                  <div className="events-one__date">
                    <p>23 May, 2022</p>
                  </div>
                  <div className="events-one__content">
                    <ul className="list-unstyled events-one__meta">
                      <li>
                        <i className="fas fa-clock" />
                        8:00pm
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        New York
                      </li>
                    </ul>
                    <h3 className="events-one__title">
                      <Link to="/event-details">
                        There are many variations of
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <div className="events-one__single">
                <div className="events-one__img">
                  <img src="assets/images/events/events-page-1-4.jpg" alt />
                  <div className="events-one__date">
                    <p>23 May, 2022</p>
                  </div>
                  <div className="events-one__content">
                    <ul className="list-unstyled events-one__meta">
                      <li>
                        <i className="fas fa-clock" />
                        8:00pm
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        New York
                      </li>
                    </ul>
                    <h3 className="events-one__title">
                      <Link to="/event-details">
                        Play for the world with us
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <div className="events-one__single">
                <div className="events-one__img">
                  <img src="assets/images/events/events-page-1-5.jpg" alt />
                  <div className="events-one__date">
                    <p>23 May, 2022</p>
                  </div>
                  <div className="events-one__content">
                    <ul className="list-unstyled events-one__meta">
                      <li>
                        <i className="fas fa-clock" />
                        8:00pm
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        New York
                      </li>
                    </ul>
                    <h3 className="events-one__title">
                      <Link to="/event-details">
                        Contrary to popular belief
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Events One Single End*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {/*Events One Single Start*/}
              <div className="events-one__single">
                <div className="events-one__img">
                  <img src="assets/images/events/events-page-1-6.jpg" alt />
                  <div className="events-one__date">
                    <p>23 May, 2022</p>
                  </div>
                  <div className="events-one__content">
                    <ul className="list-unstyled events-one__meta">
                      <li>
                        <i className="fas fa-clock" />
                        8:00pm
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        New York
                      </li>
                    </ul>
                    <h3 className="events-one__title">
                      <Link to="/event-details">
                        There are many variations of
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Events One Single End*/}
            </div>
          </div>
        </div>
      </section>
      {/*Events Page End*/}
    </div>
  );
};

export default Events;
