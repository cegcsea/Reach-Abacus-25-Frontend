import React from "react";
import { Link } from "react-router-dom";
// import "../styles/global.css";
import "../styles/Event.css";
import img1 from "../assets/images/landscape-1.jpg";
import img2 from "../assets/images/landscape-2.jpg";
import img3 from "../assets/images/landscape-3.jpg";
import Contact from "../components/Contact";
const EventPage = ({ isMenuOpen }) => {
  return (
    <div className="">
      {/* Main Section with Navbar */}

      {/* Main content goes here */}
      <div className="main bg-transparent scroll-mt-20"></div>

      <div className="card">
        <div className="event">
          <h1>Events</h1>
        </div>
        <div class="card__container">
          <article class="card__article">
            <img src={img1} alt={`${img1}`} class="card__img" />

            <div class="card__data">
              <h1 class="card__title">Technical Events</h1>
              <Link to="/technical-events" className="card__button">
                Read More
              </Link>
            </div>
          </article>

          <article class="card__article">
            <img src={img2} alt={`${img2}`} class="card__img" />

            <div class="card__data">
              <h2 class="card__title">Non Technical Events</h2>
              <Link to="/non-technical-events" className="card__button">
                Read More
              </Link>
            </div>
          </article>

          <article class="card__article">
            <img src={img3} alt={`${img3}`} class="card__img" />

            <div class="card__data">
              <h2 class="card__title">Pre Events</h2>
              <Link to="/pre-events" className="card__button">
                Read More
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default EventPage;
