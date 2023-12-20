import React from "react";

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
                    <img
                      src="assets/images/resources/donation-details-img-1.jpg"
                      alt
                    />
                    <div className="donation-details__date">
                      <p>Medical</p>
                    </div>
                  </div>
                  <div className="donation-details__content">
                    <h3 className="donation-details__title">
                      Let’s education for children get good life
                    </h3>
                    <p className="donation-details__text">
                      Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                      phaedrum. There are many variations of passages of Lorem
                      Ipsum available, but the majority have alteration in some
                      injected or words which don't look even slightly
                      believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn't anything embarrang
                      hidden in the middle of text. All the Lorem Ipsum
                      generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which looks
                      reasonable.{" "}
                    </p>
                  </div>
                </div>
                <div className="donation-details__donate">
                  <div
                    className="donation-details__donate-shape"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/donation-details-donate-shape.png)",
                    }}
                  ></div>
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
                    <a href="/donate-now" className="thm-btn">
                      Donate now
                    </a>
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
