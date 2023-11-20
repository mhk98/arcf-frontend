import React from 'react';

const EventDetails = () => {
    return (
        <div>
  {/*Event Details Start*/}
  <section className="event-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="event-details__left">
            <div className="event-details__top">
              <div className="event-details__date">
                <p>23 May, 2022</p>
              </div>
              <h3 className="event-details__title">Play for the world</h3>
              <p className="event-details__text-1">Neque porro est qui dolorem ipsum quia quaed inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
                quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.</p>
              <p className="event-details__text-2">Biophilia is the idea that humans possess an innate
                tendency to seek connections with nature. The term translates</p>
              <p className="event-details__text-3">When an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
                eros.</p>
            </div>
            <div className="event-details__img-box">
              <div className="row">
                <div className="col-xl-6">
                  <div className="event-details__img-single">
                    <img src="assets/images/events/event-details-img-1.jpg" alt />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="event-details__img-single">
                    <img src="assets/images/events/event-details-img-2.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="event-details__bottom">
              <p className="event-details__text-4">Neque porro est qui dolorem ipsum quia quaed inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
                quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <p className="event-details__text-5">Biophilia is the idea that humans possess an innate
                tendency to seek connections with nature. The term translates</p>
              <p className="event-details__text-6">When an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
                eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="event-details__btn-box">
                <a href="contact.html" className="thm-btn event-details__btn">Register
                  yourself</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="event-details__right">
            <div className="event-details__info">
              <ul className="list-unstyled event-details__info-list">
                <li>
                  <span>Time:</span>
                  <p>8:00 am to 12:30 pm</p>
                </li>
                <li>
                  <span>Date:</span>
                  <p>23 May, 2022</p>
                </li>
                <li>
                  <span>Category:</span>
                  <p>Health, Medical</p>
                </li>
                <li>
                  <span>Location:</span>
                  <p>Broklyn, New York</p>
                </li>
              </ul>
              <div className="event-details__social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="event-details__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="event-details-map__one" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Event Details End*/}
</div>

    );
};

export default EventDetails;