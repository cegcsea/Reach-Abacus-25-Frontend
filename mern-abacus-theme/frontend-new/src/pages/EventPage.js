import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import "../styles/global.css"; // Import global styles
import '../styles/Event.css'
import img1 from '../assets/images/landscape-1.jpg';
import img2 from '../assets/images/landscape-2.jpg';
import img3 from '../assets/images/landscape-3.jpg';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
const EventPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Define the state for the menu

  return (
    <div className="bg-black">
      {/* Main Section with Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> 
      
      {/* Main content goes here */}
      <div className="main bg-transparent scroll-mt-20">
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
        )}  
    
        </div>
       
        <div className="card">
        <div className='event'><h1>Events</h1></div>
         <div class="card__container">
            <article class="card__article">
               <img src={img1} alt="image" class="card__img"/>

               <div class="card__data">
                  <h1 class="card__title">Technical Events</h1>
                  <Link to="/technical-events" className="card__button">Read More</Link>
               </div>
            </article>

            <article class="card__article">
               <img src={img2} alt="image" class="card__img"/>

               <div class="card__data">

                  <h2 class="card__title">Non Technical Events</h2>
                  <Link to="/non-technical-events" className="card__button">Read More</Link>
               </div>
            </article>

            <article class="card__article">
               <img src={img3} alt="image" class="card__img"/>

               <div class="card__data">
                  <h2 class="card__title">Pre Events</h2>
                  <Link to="/pre-events" className="card__button">Read More</Link>
               </div>
            </article>
         </div>
      </div>
  <Contact />
      </div>
      

  
  );
};

export default EventPage;
