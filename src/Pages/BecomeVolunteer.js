import React from 'react';

const BecomeVolunteer = () => {
    return (
        <div>
  {/*Become Volunteer Page Start*/}
  <section className="become-volunteer-page">
    <div className="container">
      <div className="section-title text-center">
        <span className="section-title__tagline">Register yourself with us</span>
        <h2 className="section-title__title">Let’s join our community to <br /> become a volunteer</h2>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="become-volunteer-page__left">
            <div className="become-volunteer-page__img">
              <img src="assets/images/team/become-volunteer-img-1.jpg" alt />
            </div>
            <div className="become-volunteer-page__content">
              <h3 className="become-volunteer-page__title">Requirements</h3>
              <p className="become-volunteer-page__text">Aliquam hendrerit a augue insu image pellentes
                que id erat quis sollicitud null mattis Ipsum is simply dummy typesetting industry.
                Alienum phaedrum torquatos nec eu.</p>
              <ul className="list-unstyled become-volunteer__points">
                <li>
                  <div className="icon">
                    <i className="fa fa-check" />
                  </div>
                  <div className="text">
                    <p>Making this first true generator simply text</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-check" />
                  </div>
                  <div className="text">
                    <p>Lorem Ipsum is not simply free text</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="become-volunteer__call">
              <div className="become-volunteer__call-icon">
                <span className="icon-chat" />
              </div>
              <div className="become-volunteer__call-content">
                <span>Call Anytime</span>
                <p><a href="tel:980009630">+98 (000) - 9630</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="become-volunteer-page__right">
            <form className="become-volunteer-page__form">
              <div className="row">
                <div className="col-xl-12">
                  <div className="become-volunteer-page__input">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="become-volunteer-page__input">
                    <input type="email" placeholder="Email Address" name="email" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="become-volunteer-page__input">
                    <input type="text" placeholder="Phone Number" name="phone" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="become-volunteer-page__input">
                    <input type="text" placeholder="Address" name="Address" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="become-volunteer-page__input">
                    <input type="text" placeholder="Date of Birth" name="date" id="datepicker" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="become-volunteer-page__input">
                    <input type="text" placeholder="Occupation" name="Occupation" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="become-volunteer-page__input become-volunteer__message-box">
                    <textarea name="message" placeholder="Write a Comment" defaultValue={""} />
                  </div>
                  <div className="become-volunteer-page__btn-box">
                    <button type="submit" className="thm-btn become-volunteer-page__btn">Send a
                      message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Become Volunteer Page End*/}
</div>

    );
};

export default BecomeVolunteer;