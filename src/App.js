import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import BecomeVolunteer from "./Pages/BecomeVolunteer";
import Contact from "./Pages/Contact";
import DonateDetails from "./Pages/DonateDetails";
import DonateList from "./Pages/DonateList";
import DonateNow from "./Pages/DonateNow";
import EventDetails from "./Pages/EventDetails";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import News from "./Pages/News";
import NewsDetails from "./Pages/NewsDetails";
import Volunteer from "./Pages/Volunteer";
// import "./assets/css/oxpins-dark.css";
// import "./assets/css/oxpins-responsive-rtl.css";
// import "./assets/css/oxpins-responsive.css";
// import "./assets/css/oxpins-rtl-custom.css";
// import "./assets/css/oxpins-rtl.css";
// import "./assets/css/oxpins.css";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/become-volunteer" element={<BecomeVolunteer />} />
        <Route path="/donate-list" element={<DonateList />} />
        <Route path="/donate-details" element={<DonateDetails />} />

        <Route path="/donate-now" element={<DonateNow />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
