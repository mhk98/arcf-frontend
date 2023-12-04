import React from 'react';

const Education = () => {
    return (
        <div>
  {/*Page Header Start*/}
  <section className="page-header">
    <div className="page-header-bg" style={{backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)'}}>
    </div>
    <div className="container">
      <div className="page-header__inner">
        <ul className="thm-breadcrumb list-unstyled">
          <li><a href="index.html">Home</a></li>
          <li><span>/</span></li>
          <li className="active">News sidebar</li>
        </ul>
        <h2>News sidebar</h2>
      </div>
    </div>
  </section>
  {/*Page Header End*/}
  {/*News Sidebar Start*/}
  <section className="news-sidebar">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="blog-sidebar__left">
            <div className="news-sidebar__content">
              <div className="news-sidebar__single">
                <div className="news-sidebar__img">
                  <img src="assets/images/blog/news-sidebar-img-1.jpg" alt />
                  <div className="news-sidebar__date">
                    <p>23 May, 2022</p>
                  </div>
                </div>
                <div className="news-sidebar__content-box">
                  <ul className="list-unstyled news-sidebar__meta">
                    <li><a href="news-details.html"><i className="far fa-user-circle" /> Admin</a>
                    </li>
                    <li><a href="news-details.html"><i className="fas fa-comments" /> 2
                        Comments</a>
                    </li>
                  </ul>
                  <h3 className="news-sidebar__title">
                    <a href="news-details.html">How does the malnutrition affect children?</a>
                  </h3>
                  <p className="news-sidebar__text">There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage.</p>
                  <div className="news-sidebar__bottom">
                    <a href="news-details.html" className="news-sidebar__arrow"><span className="icon-right-arrow" /></a>
                    <a href="news-details.html" className="news-sidebar__read-more">Read More</a>
                  </div>
                </div>
              </div>
              <div className="news-sidebar__single">
                <div className="news-sidebar__img">
                  <img src="assets/images/blog/news-sidebar-img-2.jpg" alt />
                  <div className="news-sidebar__date">
                    <p>23 May, 2022</p>
                  </div>
                </div>
                <div className="news-sidebar__content-box">
                  <ul className="list-unstyled news-sidebar__meta">
                    <li><a href="news-details.html"><i className="far fa-user-circle" /> Admin</a>
                    </li>
                    <li><a href="news-details.html"><i className="fas fa-comments" /> 2
                        Comments</a>
                    </li>
                  </ul>
                  <h3 className="news-sidebar__title">
                    <a href="news-details.html">The point of using Lorem Ipsum</a>
                  </h3>
                  <p className="news-sidebar__text">There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage.</p>
                  <div className="news-sidebar__bottom">
                    <a href="news-details.html" className="news-sidebar__arrow"><span className="icon-right-arrow" /></a>
                    <a href="news-details.html" className="news-sidebar__read-more">Read More</a>
                  </div>
                </div>
              </div>
              <div className="news-sidebar__single">
                <div className="news-sidebar__img">
                  <img src="assets/images/blog/news-sidebar-img-3.jpg" alt />
                  <div className="news-sidebar__date">
                    <p>23 May, 2022</p>
                  </div>
                </div>
                <div className="news-sidebar__content-box">
                  <ul className="list-unstyled news-sidebar__meta">
                    <li><a href="news-details.html"><i className="far fa-user-circle" /> Admin</a>
                    </li>
                    <li><a href="news-details.html"><i className="fas fa-comments" /> 2
                        Comments</a>
                    </li>
                  </ul>
                  <h3 className="news-sidebar__title">
                    <a href="news-details.html">It is a long established fact that a reader</a>
                  </h3>
                  <p className="news-sidebar__text">There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage.</p>
                  <div className="news-sidebar__bottom">
                    <a href="news-details.html" className="news-sidebar__arrow"><span className="icon-right-arrow" /></a>
                    <a href="news-details.html" className="news-sidebar__read-more">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-sidebar__bottom-box">
              <div className="news-sidebar__shape-1" style={{backgroundImage: 'url(assets/images/shapes/news-sidebar-shape-1.png)'}} />
              <div className="news-sidebar__bottom-box-icon">
                <img src="assets/images/icon/news-sidebar-bottom-box-icon.png" alt />
              </div>
              <p className="news-sidebar__bottom-box-text">There are many variations of passages of
                available but alteration in some by inject humour or random words. There are many
                variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration.</p>
            </div>
            <div className="news-sidebar__delivering-services">
              <div className="news-sidebar__shape-1" style={{backgroundImage: 'url(assets/images/shapes/news-sidebar-shape-1.png)'}} />
              <div className="news-sidebar__delivering-services-icon">
                <a href="news-details.html"><img src="assets/images/icon/news-sidebar__delivering-services-icon.png" alt /></a>
              </div>
              <h3 className="news-sidebar__delivering-services-title"><a href="news-details.html">Educate
                  children in rural areas our priority</a></h3>
            </div>
            <div className="news-sidebar__load-more">
              <a href="news-details.html" className="thm-btn news-sidebar__load-more-btn">Load more
                posts</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="sidebar">
            <div className="sidebar__single sidebar__search">
              <form action="#" className="sidebar__search-form">
                <input type="search" placeholder="Search here" />
                <button type="submit"><i className="icon-magnifying-glass" /></button>
              </form>
            </div>
            <div className="sidebar__single sidebar__post">
              <div className="sidebar-shape-1" style={{backgroundImage: 'url(assets/images/shapes/sidebar-shape-1.png)'}} />
              <h3 className="sidebar__title">Latest posts</h3>
              <ul className="sidebar__post-list list-unstyled">
                <li>
                  <div className="sidebar__post-image">
                    <img src="assets/images/blog/lp-1-1.jpg" alt />
                  </div>
                  <div className="sidebar__post-content">
                    <h3>
                      <span className="sidebar__post-content-meta"><i className="fas fa-user-circle" /> By admin</span>
                      <a href="news-details.html">Promoting the rights
                        of children</a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="sidebar__post-image">
                    <img src="assets/images/blog/lp-1-2.jpg" alt />
                  </div>
                  <div className="sidebar__post-content">
                    <h3>
                      <span className="sidebar__post-content-meta"><i className="fas fa-user-circle" /> By admin</span>
                      <a href="news-details.html">There are many variations of</a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="sidebar__post-image">
                    <img src="assets/images/blog/lp-1-3.jpg" alt />
                  </div>
                  <div className="sidebar__post-content">
                    <h3>
                      <span className="sidebar__post-content-meta"><i className="fas fa-user-circle" /> By admin</span>
                      <a href="news-details.html">Bring to the table win-win survival</a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__single sidebar__category">
              <div className="sidebar-shape-1" style={{backgroundImage: 'url(assets/images/shapes/sidebar-shape-1.png)'}} />
              <h3 className="sidebar__title">Categories</h3>
              <ul className="sidebar__category-list list-unstyled">
                <li><a href="news-details.html">Donations <span className="icon-right-arrow" /></a>
                </li>
                <li className="active"><a href="news-details.html">Charity <span className="icon-right-arrow" /></a></li>
                <li><a href="news-details.html">Fundraising <span className="icon-right-arrow" /></a>
                </li>
                <li><a href="news-details.html">Food &amp; Water <span className="icon-right-arrow" /></a></li>
                <li><a href="news-details.html">Kids Education <span className="icon-right-arrow" /></a>
                </li>
              </ul>
            </div>
            <div className="sidebar__single sidebar__tags">
              <div className="sidebar-shape-1" style={{backgroundImage: 'url(assets/images/shapes/sidebar-shape-1.png)'}} />
              <h3 className="sidebar__title">Tags</h3>
              <div className="sidebar__tags-list">
                <a href="#">fundraising</a>
                <a href="#">charity</a>
                <a href="#">donation</a>
                <a href="#">water</a>
                <a href="#">kids</a>
                <a href="#">Education</a>
              </div>
            </div>
            <div className="sidebar__single sidebar__comments">
              <div className="sidebar-shape-1" style={{backgroundImage: 'url(assets/images/shapes/sidebar-shape-1.png)'}} />
              <h3 className="sidebar__title">Comments</h3>
              <ul className="sidebar__comments-list list-unstyled">
                <li>
                  <div className="sidebar__comments-icon">
                    <i className="fas fa-comment" />
                  </div>
                  <div className="sidebar__comments-text-box">
                    <p>A Wordpress Commenter <br /> on Launch New Mobile App</p>
                  </div>
                </li>
                <li>
                  <div className="sidebar__comments-icon">
                    <i className="fas fa-comment" />
                  </div>
                  <div className="sidebar__comments-text-box">
                    <p>John Doe on Template:</p>
                    <h5>Comments</h5>
                  </div>
                </li>
                <li>
                  <div className="sidebar__comments-icon">
                    <i className="fas fa-comment" />
                  </div>
                  <div className="sidebar__comments-text-box">
                    <p>A Wordpress Commenter <br /> on Launch New Mobile App</p>
                  </div>
                </li>
                <li>
                  <div className="sidebar__comments-icon">
                    <i className="fas fa-comment" />
                  </div>
                  <div className="sidebar__comments-text-box">
                    <p>John Doe on Template:</p>
                    <h5>Comments</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*News Sidebar End*/}
</div>

    );
};

export default Education;