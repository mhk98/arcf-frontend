import Form from "react-bootstrap/Form";
import React from "react";

const DonateNow = () => {
  return (
    <div>
      {/*Donate Now Start*/}
      <section className="donate-now" style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="donate-now__left">
                <div className="donate-now__enter-donation">
                  <h3 className="donate-now__title mt-5">
                    Enter your donation
                  </h3>
                  <div className="donate-now__enter-donation-input">
                    <select className="selectpicker">
                      <option>$</option>
                      <option>₤</option>
                      <option>¥</option>
                    </select>
                    <input
                      type="text"
                      name="donation-money"
                      defaultValue=".00"
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <h3 className="donate-now__title">
                    Choose Project for Donate
                  </h3>

                  <div className="col-xl-6">
                    <div className="donate-now__personal-info-input ">
                      <Form.Select
                        aria-label="Default select example"
                        className="select-option"
                        style={{
                          border: "none",
                          backgroundColor: "#F9F4E8",
                          borderRadius: "20px",
                        }}
                      >
                        <option>Choose Project</option>
                        <option value="1">Health</option>
                        <option value="2">Education</option>
                        <option value="3">Microcredit</option>
                        <option value="3">Improving Quality Of Life</option>
                        <option value="3">Environment</option>
                        <option value="3">Orphanage</option>
                        <option value="3">Old Home</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="donate-now__personal-info-box">
                  <h3 className="donate-now__title">Personal info</h3>
                  <form className="donate-now__personal-info-form">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="donate-now__personal-info-input">
                          <input
                            type="text"
                            placeholder="First name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__personal-info-input">
                          <input
                            type="text"
                            placeholder="Last name"
                            name="last-name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__personal-info-input">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__personal-info-input">
                          <input type="text" placeholder="Phone" name="phone" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__personal-info-input">
                          <input
                            type="text"
                            placeholder="Address"
                            name="Address"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__personal-info-input">
                          <select
                            className="selectpicker"
                            aria-label="Default select example"
                          >
                            <option selected>Country</option>
                            <option value={1}>USA</option>
                            <option value={2}>England</option>
                            <option value={3}>Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="donate-now__personal-info-input donate-now__personal-info-message-box">
                          <textarea
                            name="message"
                            placeholder="Write message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="donate-now__payment-info">
                  <h3 className="donate-now__title">Payment info</h3>
                  <form className="donate-now__payment-info-form">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="donate-now__payment-info-input">
                          <input
                            type="text"
                            placeholder="Card number"
                            name="number"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__payment-info-input">
                          <input
                            type="text"
                            placeholder="MM / YY"
                            name="date"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__payment-info-input">
                          <input
                            type="text"
                            placeholder="Card code ( CVC )"
                            name="code"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__payment-info-input">
                          <input
                            type="text"
                            placeholder="Billing address"
                            name="Billing"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__payment-info-input">
                          <input type="text" placeholder="City" name="City" />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="donate-now__payment-info-input">
                          <select
                            className="selectpicker"
                            aria-label="Default select example"
                          >
                            <option selected>Country</option>
                            <option value={1}>USA</option>
                            <option value={2}>England</option>
                            <option value={3}>Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="donate-now__payment-info-btn-box">
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="donate-now__right">
                <div className="causes-one__single">
                  <div className="causes-one__img">
                    <img src="assets/images/resources/causes-1-1.jpg" alt />
                    <div className="causes-one__cat">
                      <p>Education</p>
                    </div>
                  </div>
                  <div className="causes-one__content">
                    <h3 className="causes-one__title">
                      <a href="donation-details.html">
                        Let’s education for children get good life
                      </a>
                    </h3>
                    <p className="causes-one__text">
                      There are many of lorem, but majori have suffered
                      alteration in some form.
                    </p>
                    <div className="causes-one__progress">
                      <div
                        className="causes-one__progress-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                        }}
                      ></div>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="36%">
                          <div className="count-text">36%</div>
                        </div>
                      </div>
                      <div className="causes-one__goals">
                        <p>
                          <span>$25,270</span> Raised
                        </p>
                        <p>
                          <span>$30,000</span> Goal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="donation-details__organizer">
                  {/* <div
                    className="sidebar-shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/sidebar-shape-1.png)",
                    }}
                  /> */}
                  {/* <div className="donation-details__organizer-img">
                    <img
                      src="assets/images/resources/donation-details-organizer-img.png"
                      alt
                    />
                  </div> */}
                  <div className="donation-details__organizer-content">
                    <h3 style={{ color: "black", fontWeight: "bold" }}>
                      ARC Foundation
                    </h3>
                    <p className="donation-details__organizer-title">
                      <span style={{ fontWeight: "bold" }}>Bank Name:</span>{" "}
                      Sonali Bank Limited
                    </p>

                    <p className="donation-details__organizer-title">
                      <span style={{ fontWeight: "bold" }}>Account Name:</span>{" "}
                      ABDUR RAHIM CHISTY FOUNDATION
                    </p>
                    <p className="donation-details__organizer-title">
                      <span style={{ fontWeight: "bold" }}>
                        Account Number:
                      </span>{" "}
                      0109902000648
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Branch Name:</span>{" "}
                      BSCIC I/A Branch, Tongi, Gazipur-01099, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Donate Now End*/}
    </div>
  );
};

export default DonateNow;
