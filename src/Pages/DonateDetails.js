import React from 'react';

const DonateDetails = () => {
    return (
       <div>
  {/*Donation Details Start*/}
  <section className="donation-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="donation-details__left">
            <div className="donation-details__top">
              <div className="donation-details__img">
                <img src="assets/images/resources/donation-details-img-1.jpg" alt />
                <div className="donation-details__date">
                  <p>Medical</p>
                </div>
              </div>
              <div className="donation-details__content">
                <h3 className="donation-details__title">Let’s education for children get good life</h3>
                <p className="donation-details__text">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                  exerci phaedrum. There are many variations of passages of Lorem Ipsum available,
                  but the majority have alteration in some injected or words which don't look even
                  slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                  to be sure there isn't anything embarrang hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable. </p>
              </div>
            </div>
            <div className="donation-details__donate">
              <div className="donation-details__donate-shape" style={{backgroundImage: 'url(assets/images/shapes/donation-details-donate-shape.png)'}}>
              </div>
              <div className="donation-details__donate-left">
                <ul className="list-unstyled donation-details__donate-list">
                  <li>
                    <div className="icon">
                      <span className="icon-solidarity" />
                    </div>
                    <div className="text">
                      <span>Raised</span>
                      <p>$25,270</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-target-1" />
                    </div>
                    <div className="text">
                      <span>Goal</span>
                      <p>$30,000</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="donation-details__donate-btn">
                <a href="donate-now.html" className="thm-btn">Donate now</a>
              </div>
            </div>
            <div className="donation-details__summary">
              <h3 className="donation-details__summary-title">Summary</h3>
              <p className="donation-details__summary-text-1">Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type simen book.</p>
              <ul className="list-unstyled donation-details__summary-list">
                <li>
                  <div className="icon">
                    <span className="fa fa-check" />
                  </div>
                  <div className="text">
                    <p>Nsectetur cing do not elit.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check" />
                  </div>
                  <div className="text">
                    <p>Suspe ndisse suscipit sagittis in leo.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check" />
                  </div>
                  <div className="text">
                    <p>Entum estibulum dignissim lipsm posuere.</p>
                  </div>
                </li>
              </ul>
              <p className="donation-details__summary-text-2">Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. orem Ipsum has been the industry's standard dummy
                text ever since the when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.</p>
            </div>
            <div className="donation-details__recent-donation">
              <h3 className="donation-details__recent-donation-title">Recent donors</h3>
              <div className="list-unstyled donation-details__recent-donation-inner">
                <div className="donation-details__recent-donation-shape" style={{backgroundImage: 'url(assets/images/shapes/recent-donation-shape-1.png)'}}>
                </div>
                <ul className="list-unstyled donation-details__recent-donation-list">
                  <li>
                    <div className="donation-details__recent-donation-img">
                      <img src="assets/images/resources/recent-donation-img-1.jpg" alt />
                    </div>
                    <div className="donation-details__recent-donation-content">
                      <p>Kevin martin</p>
                      <span>$25</span>
                    </div>
                  </li>
                  <li>
                    <div className="donation-details__recent-donation-img">
                      <img src="assets/images/resources/recent-donation-img-2.jpg" alt />
                    </div>
                    <div className="donation-details__recent-donation-content">
                      <p>Jessica brown</p>
                      <span>$30</span>
                    </div>
                  </li>
                  <li>
                    <div className="donation-details__recent-donation-img">
                      <img src="assets/images/resources/recent-donation-img-3.jpg" alt />
                    </div>
                    <div className="donation-details__recent-donation-content">
                      <p>Mike hardson</p>
                      <span>$100</span>
                    </div>
                  </li>
                  <li>
                    <div className="donation-details__recent-donation-img">
                      <img src="assets/images/resources/recent-donation-img-4.jpg" alt />
                    </div>
                    <div className="donation-details__recent-donation-content">
                      <p>Christine eve</p>
                      <span>$250</span>
                    </div>
                  </li>
                  <li>
                    <div className="donation-details__recent-donation-img">
                      <img src="assets/images/resources/recent-donation-img-5.jpg" alt />
                    </div>
                    <div className="donation-details__recent-donation-content">
                      <p>David cooper</p>
                      <span>$60</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="comment-one">
              <h3 className="comment-one__title">2 comments</h3>
              <div className="comment-one__single">
                <div className="comment-one__image">
                  <img src="assets/images/blog/comment-1-1.jpg" alt />
                </div>
                <div className="comment-one__content">
                  <h3>Kevin martin</h3>
                  <p>It has survived not only five centuries, but also the leap into electronic
                    typesetting unchanged. It was popularised in the sheets containing lorem
                    ipsum is simply free text.</p>
                  <a href="news-details.html" className="thm-btn comment-one__btn">Reply</a>
                </div>
              </div>
              <div className="comment-one__single">
                <div className="comment-one__image">
                  <img src="assets/images/blog/comment-1-2.jpg" alt />
                </div>
                <div className="comment-one__content">
                  <h3>Sarah albert</h3>
                  <p>It has survived not only five centuries, but also the leap into electronic
                    typesetting unchanged. It was popularised in the sheets containing lorem
                    ipsum is simply free text.</p>
                  <a href="news-details.html" className="thm-btn comment-one__btn">Reply</a>
                </div>
              </div>
            </div>
            <div className="comment-form">
              <h3 className="comment-form__title">Leave a comment</h3>
              <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated" noValidate="novalidate">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input type="text" placeholder="Your name" name="name" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="comment-form__input-box">
                      <input type="email" placeholder="Email address" name="email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="comment-form__input-box text-message-box">
                      <textarea name="message" placeholder="Write a message" defaultValue={""} />
                    </div>
                    <div className="comment-form__btn-box">
                      <button type="submit" className="thm-btn comment-form__btn">Submit
                        comment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="donation-details__sidebar">
            <div className="donation-details__organizer">
              <div className="sidebar-shape-1" style={{backgroundImage: 'url(assets/images/shapes/sidebar-shape-1.png)'}} />
              <div className="donation-details__organizer-img">
                <img src="assets/images/resources/donation-details-organizer-img.jpg" alt />
              </div>
              <div className="donation-details__organizer-content">
                <p className="donation-details__organizer-date">Created 20 april, 2022</p>
                <p className="donation-details__organizer-title">Organizer:</p>
                <p className="donation-details__organizer-name">Jessica smith</p>
                <ul className="list-unstyled donation-details__organizer-list">
                  <li>
                    <div className="icon">
                      <span className="fas fa-tag" />
                    </div>
                    <div className="text">
                      <p>Education</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-map-marker-alt" />
                    </div>
                    <div className="text">
                      <p>Westwood, Canada</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar__post">
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
            <div className="donation-details__sidebar-shaare-cause">
              <div className="sidebar-shape-1" style={{backgroundImage: 'url(assets/images/shapes/sidebar-shape-1.png)'}} />
              <h3 className="donation-details__sidebar-shaare-cause-title">Share</h3>
              <div className="donation-details__sidebar-shaare-cause-social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Donation Details End*/}
</div>

    );
};

export default DonateDetails;