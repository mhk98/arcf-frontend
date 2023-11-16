import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div
          className="site-footer-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/site-footer-bg.jpg)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <a href="index.html">
                      <img
                        src="assets/images/resources/logo-1.png"
                        alt=""
                        width={145}
                      />
                    </a>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies.
                    </p>
                  </div>
                  <div className="footer-widget__btn">
                    <a href="donate-now.html">
                      {" "}
                      <span className="fa fa-heart" />
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Quick Links</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="news.html">Latest News</a>
                    </li>
                    <li>
                      <a href="event-details.html">Recent Events</a>
                    </li>
                    <li>
                      <a href="donation.html">Donations</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__non-profit clearfix">
                  <h3 className="footer-widget__title">Non profit</h3>
                  <ul className="footer-widget__non-profit-list list-unstyled clearfix">
                    <li>
                      <a href="donation-details.html">Differently Abled Kids</a>
                    </li>
                    <li>
                      <a href="donation-details.html">Help Child Cancer</a>
                    </li>
                    <li>
                      <a href="donation-details.html">Clean Pure Water</a>
                    </li>
                    <li>
                      <a href="donation-details.html">Give them Education</a>
                    </li>
                    <li>
                      <a href="donation-details.html">Start a Fundraising</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">Contact</h3>
                  <p className="footer-widget__contact-text">
                    380 Street Kilda Broklyn Road <br /> Melbourne Australia
                  </p>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:needhelp@company.com ">
                            needhelp@company.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:980009630">+ 98 (000) - 9630</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="site-footer__social">
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
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    © All Copyright 2023 by <a href="#">Oxpins.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/resources/logo-2.png" width={143} alt />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">
                arcf.society.bd@gmail.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">+880 2224412300</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
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

export default Footer;
