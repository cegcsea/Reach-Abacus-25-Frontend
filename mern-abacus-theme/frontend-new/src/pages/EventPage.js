import React from 'react';
import "../styles/global.css"; // Import global styles
import '../styles/Event.css'
import img1 from '../assets/images/landscape-1.jpg';
import img2 from '../assets/images/landscape-2.jpg';
import img3 from '../assets/images/landscape-3.jpg';

const EventPage = ({isMenuOpen}) => {

  return (
    <div className="bg-black">
      {/* Main Section with Navbar */}
      {/* <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} active=/>  */}
      
      {/* Main content goes here */}
      <div className="main bg-transparent scroll-mt-20">
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
        )}  
    
        </div>

        <div className="card">
         <div class="card__container">
            <article class="card__article">
               <img src={img1} alt="image" class="card__img"/>

               <div class="card__data">
                  <h2 class="card__title">Technical Events</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>

            <article class="card__article">
               <img src={img2} alt="image" class="card__img"/>

               <div class="card__data">

                  <h2 class="card__title">Non Technical Events</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>

            <article class="card__article">
               <img src={img3} alt="image" class="card__img"/>

               <div class="card__data">
                  <h2 class="card__title">Pre Events</h2>
                  <a href="#" class="card__button">Read More</a>
               </div>
            </article>
         </div>
      </div>
      <div class="contact_details">
         <div class="head">
           <h3>Contacts</h3>
           <p>For queries regarding events</p>
         </div>
         <div class="names">
           <div>
             <p><i class="fas fa-user"></i> Navaneeth</p>
             <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
           </div>
           <div>
             <p><i class="fas fa-user"></i> Navaneeth</p>
             <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
           </div>
           <div>
             <p><i class="fas fa-user"></i> Navaneeth</p>
             <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
           </div>
           <div>
             <p><i class="fas fa-user"></i> Navaneeth</p>
             <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
           </div>
         </div>
       </div>
      </div>
      

  
  );
};

export default EventPage;
