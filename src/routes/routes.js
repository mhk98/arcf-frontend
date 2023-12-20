import { createBrowserRouter } from "react-router-dom";
import DonateEvents from "../Components/DonateEvents";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import About from "../Pages/About/About";
import AllProject from "../Pages/AllProject";
import Contact from "../Pages/Contact";
import DonateDetails from "../Pages/Donations/DonateDetails";
import DonateList from "../Pages/Donations/DonateList";
import DonateNow from "../Pages/Donations/DonateNow";
import EventDetails from "../Pages/Events/EventDetails";
import Events from "../Pages/Events/Events";
import Gallery from "../Pages/Gallery";
import Home from "../Pages/Home";
import News from "../Pages/News/News";
import NewsDetails from "../Pages/News/NewsDetails";
import BecomeVolunteer from "../Pages/Services/BecomeVolunteer";
import Education from "../Pages/Services/Education";
import Environment from "../Pages/Services/Environment";
import MicroCredit from "../Pages/Services/MicroCredit";
import Oldhome from "../Pages/Services/Oldhome";
import Orphanage from "../Pages/Services/Orphanage";
import QualityLife from "../Pages/Services/QualityLife";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Footer />
      </>
    ),
    children: [
      {
        index: true, // Corrected from "index: true"
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "projects",
        element: <AllProject />,
      },
      {
        path: "microcredit",
        element: <MicroCredit />,
      },
      {
        path: "quality-life",
        element: <QualityLife />,
      },
      {
        path: "environment",
        element: <Environment />,
      },
      {
        path: "orphanage",
        element: <Orphanage />,
      },
      {
        path: "oldhome",
        element: <Oldhome />,
      },
      {
        path: "become-volunteer",
        element: <BecomeVolunteer />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "donate-list",
        element: <DonateList />,
      },
      {
        path: "oldhome",
        element: <Oldhome />,
      },
      {
        path: "donate-details",
        element: <DonateDetails />,
      },
      {
        path: "donate-now",
        element: <DonateNow />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "event-details",
        element: <EventDetails />,
      },
      {
        path: "donate-events",
        element: <DonateEvents />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news-details",
        element: <NewsDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
