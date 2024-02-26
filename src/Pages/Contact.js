import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";
import toast from "react-hot-toast";
import { useGetAllContactSliderQuery } from "../Redux/features/contactSlider/contactSlider";
const Contact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  // const handleSendMail = async () => {
  //   const data = {
  //     senderAddress: address,
  //     senderPhone: phone,
  //     senderName: name,
  //     mailerSubject: subject,
  //     mailerMessage: message,
  //   };
  //   const res = await axios.post(
  //     "https://server.arcfbd.org/api/v1/contact/create-contact",
  //     data
  //   );
  // };

  const handleSendMail = async () => {
    try {
      const data = {
        mailAddress: address,
        mailerName: name,
        mailerSubject: subject,
        mailerMessage: message,
        senderPhone: phone,
      };

      console.log("data", data);
      //     // Use IP address instead of hostname
      const res = await axios.post(
        "https://server.arcfbd.org/api/v1/contact/create-contact", // replace x.x.x.x with the actual IP address
        data
      );

      if (res.data.data.status === "Success") {
        toast.success("Successfully send email");
      } else {
        console.error(
          "Failed to send mail. Server returned status:",
          res.status
        );
      }
    } catch (error) {
      console.error("An error occurred while sending the mail:", error.message);
    }
  };

  // handleSendMail();

  const [contactBanner, setContactBanner] = useState([]);

  const { data, isLoading, isError, error } = useGetAllContactSliderQuery();
  console.log("contactBanner", contactBanner);

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching slides data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setContactBanner(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : contactBanner ? (
        contactBanner.map((item) => (
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
                    backgroundImage: `url(https://server.arcfbd.org/${item.image1})`,
                  }}
                >
                  {/* <img src={`https://server.arcfbd.org/${item.image1}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image2})`,
                  }}
                >
                  {/* <img src={`https://server.arcfbd.org/${item.image2}`} alt="" /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="page-header-bg"
                  style={{
                    backgroundImage: `url(https://server.arcfbd.org/${item.image3})`,
                  }}
                >
                  {/* <img src={`https://server.arcfbd.org/${item.image3}`} alt="" /> */}
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
                <h2>{item.title}</h2>
              </div>
            </div>
          </section>
        ))
      ) : (
        <h2 className="text-center">No slider found</h2>
      )}
      {/*Contact Three Start*/}
      <section className="contact-three">
        <div
          className="contact-three-shape"
          style={{
            backgroundImage:
              "url(assets/images/shapes/contact-three-shape.png)",
          }}
        />
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline mt-5">Contact with us</span>
            <h2 className="section-title__title">
              Feel free to write us <br />
              anytime
            </h2>
          </div>
          <div className="contact-page__form-box">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMail();
              }}
              // action="assets/inc/sendemail.php"
              className="contact-page__form contact-form-validated"
              // noValidate="novalidate"
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Your name"
                      name="name"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      placeholder="Phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="contact-form__input-box text-message-box">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      placeholder="Write a message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="contact-form__btn-box">
                    <input
                      type="submit"
                      className="thm-btn contact-form__btn"
                      value="Send a message"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*Contact Three End*/}
      {/*Contact One Start*/}
      <section className="contact-one">
        <div className="container">
          <div className="contact-one__inne">
            <ul className="list-unstyled contact-one__list">
              <li className="contact-one__single">
                <div className="contact-one__icon">
                  <span className="icon-phone-call" />
                </div>
                <div className="contact-one__content">
                  <p className="contact-one__sub-title">Helpline</p>
                  <h3 className="contact-one__number">
                    <a href="tel:980009630">+880 2224412300</a>
                  </h3>
                </div>
              </li>
              <li className="contact-one__single">
                <div className="contact-one__icon">
                  <span className="icon-message" />
                </div>
                <div className="contact-one__content">
                  <p className="contact-one__sub-title">Send email</p>
                  <h3 className="contact-one__number">
                    <a href="mailto:needhelp@company.com">
                      arcf.society.bd@gmail.com
                    </a>
                  </h3>
                </div>
              </li>
              <li className="contact-one__single">
                <div className="contact-one__icon">
                  <span className="icon-location" />
                </div>
                <div className="contact-one__content">
                  <p className="contact-one__sub-title">
                    321, Fatema Manjil, Fakir Market, Pagar, BSCIC,
                  </p>
                  <h3 className="contact-one__number">
                    Tongi, Gazipur-1710, Bangladesh
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Contact One End*/}
      {/*Google Map Start*/}
      <section className="google-map google-map-two">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.902464284499!2d90.41334887410552!3d23.893077083286176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5953b6c98eb%3A0xb79aa149666e273a!2sARC%20FOUNDATION!5e0!3m2!1sen!2sbd!4v1706374521243!5m2!1sen!2sbd"
          className="google-map__one"
          allowFullScreen
        />
      </section>
      {/*Google Map End*/}
    </div>
  );
};

export default Contact;
