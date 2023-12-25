import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
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
            <h2>Gallery</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      <div className="container">
        <div className="text-center" style={{ marginTop: "80px" }}>
          <h3 className="section-title__title" style={{ fontWeight: "bold" }}>
            Gallery
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
      {/*Gallery Page Start*/}
      <section className="gallery-page">
        <div className="container">
          <h2 className="causes-one__title mb-3">Photo Gallery</h2>

          <div className="row">
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-1.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-1.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-2.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-2.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-3.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-3.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-4.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-4.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-5.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-5.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-6.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-6.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-7.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-7.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-1.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-8.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-2.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-9.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
          </div>
        </div>
      </section>
      <section className="gallery-page" style={{ marginTop: "-120px" }}>
        <div className="container">
          <h2 className="causes-one__title mb-3">Video Gallery</h2>
          <div className="row">
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-1.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-1.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-2.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-2.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-3.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-3.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-4.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-4.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-5.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-5.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-6.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-6.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-7.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-7.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-1.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-8.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
            {/*Gallery Page Single Start*/}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <img src="assets/images/resources/p-2.jpg" alt />
                  <a
                    href="assets/images/gallery/gallery-page-1-9.jpg"
                    className="img-popup"
                  />
                  {/* /.img-popup */}
                  <div className="gallery-page__content">
                    <p className="gallery-page__sub-title">Charity</p>
                    <h5 className="gallery-page__title">
                      <a href="gallery.html">Education</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/*Gallery Page Single End*/}
          </div>
        </div>
      </section>
      {/*Gallery Page End*/}
    </div>
  );
};

export default Gallery;
