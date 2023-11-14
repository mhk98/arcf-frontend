import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link to="/">
                    <img src="assets/images/resources/logo-1.png" alt />
                  </Link>
                </div>
                <div className="main-menu__shape-1 float-bob-x">
                  <img src="assets/images/shapes/main-menu-shape-1.png" alt />
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__right-top">
                  <div className="main-menu__right-top-left">
                    <div className="main-menu__volunteers">
                      <div className="main-menu__volunteers-icon">
                        <img
                          src="assets/images/icon/main-menu-heart-icon.png"
                          alt
                        />
                      </div>
                      <div className="main-menu__volunteers-text-box">
                        <p className="main-menu__volunteers-text">
                          <Link to="/become-volunteer">
                            Become a<span>volunteers</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="main-menu__right-top-right">
                    <div className="main-menu__right-top-address">
                      <ul className="list-unstyled main-menu__right-top-address-list">
                        <li>
                          <div className="icon">
                            <span className="icon-phone-call" />
                          </div>
                          <div className="content">
                            <p>Helpline</p>
                            <h5>
                              <Link to="tel:980009630">+ 98 (000) - 9630</Link>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-message" />
                          </div>
                          <div className="content">
                            <p>Send email</p>
                            <h5>
                              <Link to="mailto:needhelp@company.com">
                                needhelp@company.com
                              </Link>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-location" />
                          </div>
                          <div className="content">
                            <p>380 St Kilda Road</p>
                            <h5>Melbourne, Australia</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="main-menu__right-top-social">
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-facebook" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="main-menu__right-bottom">
                  <div className="main-menu__main-menu-box">
                    <Link to="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars" />
                    </Link>
                    <ul className="main-menu__list">
                      <li className="dropdown current megamenu">
                        <Link to="/">Home </Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/about-us">About</Link>
                      </li>

                      <li className="dropdown">
                        <Link>Services</Link>
                        <ul>
                          <li>
                            <Link to="/volunteer">Volunteer</Link>
                          </li>
                          <li>
                            <Link to="/become-volunteer">Become volunteer</Link>
                          </li>

                          <li>
                            <Link to="">Youth</Link>
                          </li>
                          <li>
                            <Link to="">Women</Link>
                          </li>
                          <li>
                            <Link to="">Governance </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link>What we do</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#">Donations</Link>
                        {/* <ul>
                          <li>
                            <Link to="">Donation</Link>
                          </li>
                          <li>
                            <Link to="">Donation list</Link>
                          </li>
                          <li>
                            <Link to="">Donation carousel</Link>
                          </li>
                          <li>
                            <Link to="donation-details.html">
                              Donation details
                            </Link>
                          </li>
                          <li>
                            <Link to="donate-now.html">Donate Now</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className="">
                        <Link to="/events">Events</Link>
                        {/* <ul>
                          <li>
                            <Link to="events.html">Events</Link>
                          </li>

                          <li>
                            <Link to="event-details.html">Event details</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <Link to="/news">News</Link>
                        {/* <ul>
                          <li>
                            <Link to="news.html">News</Link>
                          </li>
                          <li>
                            <Link to="news-carousel.html">News carousel</Link>
                          </li>
                          <li>
                            <Link to="news-sidebar.html">News right sidebar</Link>
                          </li>
                          <li>
                            <Link to="news-sidebar-left.html">
                              News left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="news-details.html">News details</Link>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="dropdown">
                        <Link to="products.html">Shop</Link>
                        <ul>
                          <li>
                            <Link to="products.html">Shop</Link>
                          </li>
                          <li>
                            <Link to="product-details.html">Product details</Link>
                          </li>
                          <li>
                            <Link to="cart.html">Cart</Link>
                          </li>
                          <li>
                            <Link to="checkout.html">Checkout</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="main-menu__main-menu-content-box">
                    <div className="main-menu__search-cat-btn-box">
                      <div className="main-menu__search-box">
                        <Link
                          to="#"
                          className="main-menu__search search-toggler icon-magnifying-glass"
                        />
                      </div>
                      <div className="main-menu__cat-box">
                        <Link
                          to="cart.html"
                          className="main-menu__cart icon-shopping-cart"
                        />
                      </div>
                      <div className="main-menu__btn-box">
                        <Link to="donate-now.html" className="main-menu__btn">
                          {" "}
                          <span className="fa fa-heart" /> Donate now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
        {/* /.sticky-header__content */}
      </div>
      {/* /.stricky-header */}
    </div>
  );
};

export default Navbar;
