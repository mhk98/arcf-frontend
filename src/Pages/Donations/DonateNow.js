import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import BkashPayment from "../../Components/PaymentOption/BkashPayment";
import NagadPayment from "../../Components/PaymentOption/NagadPayment";
import OnlinePayment from "../../Components/PaymentOption/OnlinePayment";
import "../../Components/PaymentOption/Payment.css";
import UpayPayment from "../../Components/PaymentOption/UpayPayment";
import { useGetAllProjectsQuery } from "../../Redux/features/projects/projects";
import bkashPayment from "../../image/payment/bkash-payment1.jpg";
import nagadPayment from "../../image/payment/nagad-payment.jpg";
import onlinePayment from "../../image/payment/online-payment.png";
import upayPayment from "../../image/payment/upay-payment.jpg";
const DonateNow = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const [projects, setProjects] = useState([]);

  const { data, isLoading, isError, error } = useGetAllProjectsQuery();

  const donationProject = projects.filter(
    (project) => project.page === "Donation"
  );

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects data", error);
    } else if (!isLoading) {
      if (data) {
        setProjects(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  console.log("project", donationProject);
  return (
    <div>
      {/*Donate Now Start*/}
      <section className="donate-now" style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="donate-now__left">
                <div class="donate-now__enter-donation">
                  <h3 class="donate-now__title">Enter your donation</h3>
                  <div class="donate-now__enter-donation-input">
                    <select class="selectpicker">
                      <option>$</option>
                      <option>৳</option>
                      <option>¥</option>
                    </select>
                    <input type="text" name="donation-money" value=".00" />
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

                  <div className="row gap-5">
                    <div
                      className={`payment-option col-xl-5 ${
                        activeButton === 0 ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(0)}
                    >
                      <p className=""> Online Payment</p>
                      <img src={onlinePayment} alt="" />
                    </div>
                    <div
                      className={`payment-option col-xl-5 ${
                        activeButton === 1 ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(1)}
                    >
                      <p className=""> Nagad Payment</p>
                      <img src={nagadPayment} alt="" />
                    </div>

                    <div
                      className={`payment-option col-xl-5 ${
                        activeButton === 2 ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(2)}
                    >
                      <p className=""> Bkash Payment</p>
                      <img src={bkashPayment} alt="" />
                    </div>
                    <div
                      className={`payment-option col-xl-5 ${
                        activeButton === 3 ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(3)}
                    >
                      <p className=""> Upay Payment</p>
                      <img src={upayPayment} alt="" />
                    </div>
                  </div>

                  <div className="payment-container">
                    {activeButton === 0 && (
                      <div>
                        <OnlinePayment />
                      </div>
                    )}
                    {activeButton === 1 && (
                      <div>
                        <NagadPayment />
                      </div>
                    )}
                    {activeButton === 2 && (
                      <div>
                        <BkashPayment />
                      </div>
                    )}
                    {activeButton === 3 && (
                      <div>
                        <UpayPayment />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {donationProject.length ? (
              donationProject.map((project) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="causes-one__single">
                    <div className="causes-one__img">
                      <Link>
                        <img
                          src={`https://server.arcfbd.org/${project.image1}`}
                          alt=""
                        />
                      </Link>
                      <div className="causes-one__cat">
                        <p className="mt-2">{project.category}</p>
                      </div>
                    </div>
                    <div className="causes-one__content">
                      <h3 className="causes-one__title">{project.title}</h3>

                      <p>{project.item}</p>

                      <Link to="/projects" className="thm-btn about-one__btn">
                        See More
                      </Link>
                      {/* <div
                      className="donate-now__payment-info-btn-box"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="submit"
                        className="thm-btn donate-now__payment-info-btn"
                      >
                        Donate now
                      </button>
                    </div> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No project found</h3>
            )}
          </div>
        </div>
      </section>
      {/*Donate Now End*/}
    </div>
  );
};

export default DonateNow;
