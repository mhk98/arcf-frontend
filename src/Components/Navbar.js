import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <div className="custom-cursor">
      {/* /.preloader */}
      {/* <div className="page-wrapper"> */}
      <header className="main-header ">
        <nav className="main-menu ">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <a href="/">
                    <img
                      src="assets/images/resources/logo-1.png"
                      alt=""
                      width={200}
                    />
                  </a>
                </div>
                <div className="main-menu__shape-1 float-bob-x">
                  <img src="assets/images/shapes/main-menu-shape-1.png" alt />
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__right-top">
                  <div className="main-menu__right-top-left">
                    {/* <div className="main-menu__volunteers">
                      <div className="main-menu__volunteers-icon">
                        <img
                          src="assets/images/icon/main-menu-heart-icon.png"
                          alt
                        />
                      </div>
                      <div className="main-menu__volunteers-text-box">
                        <p className="main-menu__volunteers-text">
                          <a href="become-volunteer.html">
                            Become a<span>volunteers</span>
                          </a>
                        </p>
                      </div>
                    </div> */}
                  </div>
                  <div className="main-menu__right-top-right">
                    <div className="main-menu__right-top-address">
                      <ul className="list-unstyled main-menu__right-top-address-list">
                        <li>
                          <div className="icon">
                            <span className="icon-phone-call" />
                          </div>
                          <div className="content">
                            {/* <p>Helpline</p> */}
                            <h5>
                              <a href="tel:980009630">+880 2224412300</a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-message" />
                          </div>
                          <div className="content">
                            {/* <p>Send email</p> */}
                            <h5>
                              <a href="mailto:needhelp@company.com">
                                arcf.society.bd@gmail.com
                              </a>
                            </h5>
                          </div>
                        </li>
                        {/* <li>
                          <div className="icon">
                            <span className="icon-location" />
                          </div>
                          <div className="content">
                            <p>321 Eidgah Road Pagar BSCIC</p>
                            <h5>Gazipur Bangladesh</h5>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="main-menu__right-top-social">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-menu__right-bottom">
                  <div className="main-menu__main-menu-box">
                    <a
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={toggleMobileNav}
                    >
                      <i className="fa fa-bars" />
                    </a>

                    <ul className="main-menu__list">
                      <li className="dropdown current megamenu">
                        <a href="/">Home </a>
                      </li>
                      <li className="dropdown">
                        <Link to="/about-us">About</Link>
                      </li>
                      {/* <li className="dropdown">
                        <Link to="/about-us">What we do</Link>
                      </li> */}

                      <li className="dropdown">
                        <Link to="/projects">Project</Link>
                        {/* <ul>
                          <li>
                            <Link to="/health">Health </Link>
                          </li>
                          <li>
                            <Link to="/become-volunteer">Education</Link>
                          </li>

                          <li>
                            <Link to="/education">Microcredit Program</Link>
                          </li>
                          <li>
                            <Link to=""> Men & Women </Link>
                          </li>
                          <li>
                            <Link to="">Orphanage </Link>
                          </li>
                          <li>
                            <Link to="">Governance </Link>
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
                      </li>  */}

                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="main-menu__main-menu-content-box">
                    <div className="main-menu__search-cat-btn-box">
                      {/* <div className="main-menu__search-box">
                        <a
                          href="#"
                          className="main-menu__search search-toggler icon-magnifying-glass"
                        />
                      </div> */}
                      {/* <div className="main-menu__cat-box">
                        <a
                          href="cart.html"
                          className="main-menu__cart icon-shopping-cart"
                        />
                      </div> */}
                      <div className="main-menu__btn-box">
                        <Link href="/donate-now" className="main-menu__btn">
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
      {/* </div> */}
      {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className={`mobile-nav__overlay`} />

        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="/" aria-label="logo image">
              <img
                src="assets/images/resources/logo-2.png"
                width={200}
                alt=""
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">
                needhelp@oxpins.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a
                href="https://www.facebook.com/arcf.society.bd.org"
                className="fab fa-facebook-square"
              />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest-p" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>

      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="icon-up-arrow" />
      </a>
    </div>
  );
};

export default Navbar;
