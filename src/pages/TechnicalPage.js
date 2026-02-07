import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import "../styles/TechnicalPage.css";
import { EventContacts } from "../constants/events";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const TechnicalPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { event } = location.state || {};

  // const { isLoading } = LoaderData();

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="tech-page-wrapper">
        <div className="page-header">
          <h1 className="main-title">{event?.title}</h1>
        </div>

        <div className="cards-container">
          {event?.event?.map((item, index) => (
            <div
              key={index}
              className={`event-card ${index % 2 !== 0 ? "reverse-layout" : ""}`}
            >
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>

                <Link
                  to={item.path}
                  state={{ event: item }}
                  className="read-more-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact contacts={EventContacts} />
    </>
  );
};

export default TechnicalPage;
