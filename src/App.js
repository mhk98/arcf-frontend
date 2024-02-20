import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DonateDetails from "./Pages/Donations/DonateDetails";
import DonateList from "./Pages/Donations/DonateList";
import DonateNow from "./Pages/Donations/DonateNow";
import EventDetails from "./Pages/Events/EventDetails";
import Events from "./Pages/Events/Events";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/News/NewsDetails";
import BecomeVolunteer from "./Pages/Services/BecomeVolunteer";
import Education from "./Pages/Services/Education";

import "./assets/css/oxpins-responsive.css";
import "./assets/css/oxpins.css";

import Environment from "./Pages/Services/Environment";
import MicroCredit from "./Pages/Services/MicroCredit";
import Oldhome from "./Pages/Services/Oldhome";
import Orphanage from "./Pages/Services/Orphanage";
import QualityLife from "./Pages/Services/QualityLife";
import "./assets/vendors/animate/animate.min.css";
import "./assets/vendors/animate/custom-animate.css";
import "./assets/vendors/bootstrap-select/css/bootstrap-select.min.css";
import "./assets/vendors/bootstrap/css/bootstrap.min.css";
import "./assets/vendors/bxslider/jquery.bxslider.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/jarallax/jarallax.css";
import "./assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "./assets/vendors/jquery-ui/jquery-ui.css";
import "./assets/vendors/nouislider/nouislider.min.css";
import "./assets/vendors/nouislider/nouislider.pips.css";
import "./assets/vendors/odometer/odometer.min.css";
import "./assets/vendors/owl-carousel/owl.carousel.min.css";
import "./assets/vendors/owl-carousel/owl.theme.default.min.css";
import "./assets/vendors/oxpins-icons/style.css";
import "./assets/vendors/reey-font/stylesheet.css";
import "./assets/vendors/swiper/swiper.min.css";
import "./assets/vendors/timepicker/timePicker.css";
import "./assets/vendors/tiny-slider/tiny-slider.min.css";
// import "./assets/vendors/vegas/vegas.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import DonateEvents from "./Components/DonateEvents";
import Player from "./Components/Gallery/Player";
import ImageViewer from "./Components/ImageViewer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";
import EducationDetails from "./Pages/Services/EducationDetails";
import HealthCategoryDetails from "./Pages/Services/Health/HealthCategoryDetails";
import MIcroDetails from "./Pages/Services/MIcroDetails";
import AllProject from "./Pages/Services/Projects/AllProject";
import ProjectSubCategory from "./Pages/Services/Projects/ProjectSubCategory";
import ProjectSubCategoryDetails from "./Pages/Services/Projects/ProjectSubCategoryDetails";
import QualityLifeDetails from "./Pages/Services/QualityLifeDetails";
import Youth from "./Pages/Services/Youth";
import store from "./Redux/app/store";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleCursor = (e) => {
      console.log(e.clientX, e.clientY);
      setX(e.clientX - 10);
      setY(e.clientY - 10);
    };

    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  return (
    <div className="App">
      <motion.div
        className="cursor"
        animate={{
          translateX: x,
          translateY: y,
        }}
      >
        <div className="inner-cursor"></div>
      </motion.div>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<AllProject />} />
          <Route path="/project/:id" element={<ProjectSubCategory />} />
          <Route
            path="/project-subcategory-details/:projectId/:subcategoryId"
            element={<ProjectSubCategoryDetails />}
          />
          <Route
            path="/health-category-details/:id"
            element={<HealthCategoryDetails />}
          />
          {/* <Route path="/health" element={<Health />} /> */}
          <Route path="/image-gallery" element={<ImageViewer />} />
          <Route path="/education" element={<Education />} />
          <Route path="/microcredit" element={<MicroCredit />} />
          <Route path="/quality-life" element={<QualityLife />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/orphanage" element={<Orphanage />} />
          <Route path="/oldhome" element={<Oldhome />} />
          <Route path="/become-volunteer" element={<BecomeVolunteer />} />
          <Route path="/education" element={<Education />} />
          <Route path="/donate-list" element={<DonateList />} />
          <Route path="/donate-details" element={<DonateDetails />} />
          <Route path="/education-details" element={<EducationDetails />} />
          <Route path="/micro-details" element={<MIcroDetails />} />
          <Route
            path="/quality-life-details"
            element={<QualityLifeDetails />}
          />

          <Route path="/donate-now" element={<DonateNow />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events-details/:id" element={<EventDetails />} />
          <Route path="/donation-events" element={<DonateEvents />} />
          <Route path="/news" element={<News />} />
          <Route path="/news-details/:id" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editor" element={<Youth />} />
          <Route path="/player" element={<Player />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
