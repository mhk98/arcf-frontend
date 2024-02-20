import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllDonationQuery } from "../Redux/features/donation/donation";
import { useGetAllDonationCategoryDescriptionQuery } from "../Redux/features/donationBannerDescription/donationBannerDescription";
const DonateEvents = () => {
  const [donation, setDonation] = useState([]);

  const { data, isLoading, isError, error } = useGetAllDonationQuery();

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching donation data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setDonation(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [donationDescription, setDonationDescription] = useState([]);

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
    error: error1,
  } = useGetAllDonationCategoryDescriptionQuery();

  useEffect(() => {
    if (isError1) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching donation data:", error1);
    } else if (!isLoading1) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data1 && data1.data) {
        setDonationDescription(data1.data);
      }
    }
  }, [data1, isLoading1, isError1, error1]);

  console.log("donationDescription", donationDescription);
  console.log("donation", donation);
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : donationDescription ? (
        donationDescription.map((item) => (
          <section key={item.Id} className="page-header">
            <Swiper
              className="page-header-bg"
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0} // Adjust space between slides if needed
              slidesPerView={1}
              effect="fade"
              loop={true}
              autoplay={{ delay: 5000 }}
            >
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image1})`,
                  }}
                >
                  {/* <img src={`http://localhost:5000/${item.image1}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image2})`,
                  }}
                >
                  {/* <img src={`http://localhost:5000/${item.image2}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.image3})`,
                  }}
                >
                  {/* <img src={`http://localhost:5000/${item.image3}`} alt="" /> */}
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlides if needed */}
            </Swiper>

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
                <h2>Donation</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No slider found</h2>
      )}

      {donationDescription.length
        ? donationDescription.map((item) => (
            <section className="product-details">
              <div className="container">
                <div
                  className="row"
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="col-lg-6 col-xl-4">
                    <div className="product-details__img">
                      <img
                        src={`http://localhost:5000/${item.image4}`}
                        alt=""
                        style={{ width: 370, height: 382 }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="product-details__top">
                      <h3 className="product-details__title">{item.title}</h3>
                    </div>
                    <div className="product-details__reveiw" />
                    <div className="product-details__content">
                      <p className="product-details__content-text1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))
        : ""}

      {/*Causes One Start*/}
      <section className="causes-one">
        <div className="container">
          <h3 className="causes-one__title mb-3">Latest Events</h3>

          <div className="row">
            {donation.length ? (
              donation.map((item) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="causes-one__single">
                    <div className="causes-one__img">
                      <Link to="/">
                        <img
                          src={`http://localhost:5000/${item.image}`}
                          alt=""
                        />
                      </Link>
                      <div className="causes-one__cat">
                        <p className="mt-2">Donation</p>
                      </div>
                    </div>
                    <div className="causes-one__content">
                      <h3 className="causes-one__title">{item.title}</h3>

                      <p className="causes-one__text"> {item.text}</p>

                      <div>
                        <div
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
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo"
                          >
                            Donate now
                          </button>
                        </div>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                          style={{ display: "none" }}
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message to @getbootstrap
              </h1> */}
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body">
                                <form>
                                  <section className="donate-now">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-11">
                                          <div className="donate-now__left">
                                            <div className="causes-one__img">
                                              <img
                                                src={`http://localhost:5000/${item.image}`}
                                                alt=""
                                              />
                                            </div>
                                            <div>
                                              <h3 className="donate-now__title">
                                                {item.title}
                                              </h3>
                                              <p>{item.text}</p>
                                            </div>
                                            <div className="donate-now__enter-donation">
                                              <h3 className="donate-now__title">
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
                                            <div className="donate-now__personal-info-box">
                                              <h3 className="donate-now__title">
                                                Personal info
                                              </h3>
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
                                                      <input
                                                        type="text"
                                                        placeholder="Phone"
                                                        name="phone"
                                                      />
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
                                                        <option selected>
                                                          Country
                                                        </option>
                                                        <option value={1}>
                                                          USA
                                                        </option>
                                                        <option value={2}>
                                                          England
                                                        </option>
                                                        <option value={3}>
                                                          Australia
                                                        </option>
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
                                              <h3 className="donate-now__title">
                                                Payment info
                                              </h3>
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
                                                      <input
                                                        type="text"
                                                        placeholder="City"
                                                        name="City"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                    <div className="donate-now__payment-info-input">
                                                      <select
                                                        className="selectpicker"
                                                        aria-label="Default select example"
                                                      >
                                                        <option selected>
                                                          Country
                                                        </option>
                                                        <option value={1}>
                                                          USA
                                                        </option>
                                                        <option value={2}>
                                                          England
                                                        </option>
                                                        <option value={3}>
                                                          Australia
                                                        </option>
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
                                      </div>
                                    </div>
                                  </section>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3>No found donation</h3>
            )}
          </div>
        </div>
      </section>
      {/*Causes One End*/}
    </div>
  );
};

export default DonateEvents;
