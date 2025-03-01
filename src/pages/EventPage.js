import React from "react";
import { Link } from "react-router-dom";
import { EventContacts, events } from "../constants/events"; // Import the events array
import "../styles/Event.css";
import Contact from "../components/Contact";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
const EventPage = () => {
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="main bg-transparent scroll-mt-20"></div>
      <div className="card">
        <div className="event">
          <h1>Events</h1>
        </div>
        <div className="card__container">
          {events.map((event, index) => (
            <article className="card__article" key={index}>
              <img src={event.image} alt={event.title} className="card__img" />
              <div className="card__data">
                <h1 className="card__title">{event.title}</h1>
                <Link
                  to={{
                    pathname: event.path, // Path to the detailed page
                  }}
                  state={{ event }} // Pass the full event object
                  className="card__button"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* <Contact contacts={EventContacts} /> */}
    </div>
  );
};

export default EventPage;
