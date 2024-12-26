import React from 'react';
import '../styles/about.css';
import '../styles/global.css';
import '../assets/images/logo.jpeg';

const HomePage = () => {
  return (
    <div>
      <div className="main">
       
        <div className='initial'>
          <div className='div1' >
          <h1 className="heading">
            ABACUS'24
            "Ideas Converge and Possibilities Unfold"
          </h1>
          <p>Navigating the Future, One Innovation at a Time</p>
          <div className='button'><button className='theme'>Innovate, Integrate, Inspire: ABACUS'24</button><button className='contact_but'>Contact Us!!</button></div>
          </div>
          <div className='div2'>
          <img className='des-1'
              src={require('../assets/images/Untitled_design__3_-removebg-preview.png')}
              alt="Abacus Logo"
         />
          {/* <img className='des-2'
              src={require('../assets/images/design-2.png')}
              alt="Abacus Logo"
         /> */}
            <img className='logo'
              src={require('../assets/images/logo.jpeg')}
              alt="Abacus Logo"
         />
          </div>
        </div>
        <h2>Abacus-2025</h2>
        
         
        <div className="about">
          <div className='first'>
          <img
              src={require('../assets/images/logo.jpeg')}
              alt="Abacus Logo"
            />
          
          </div>
          <div className='second'>
          <p>
            The conglomeration of the brightest minds enhancing the
            participant’s knowledge and creative potentials. The 3-day annual
            symposium showcases 15+ events and flagship contests of crystal
            gazing technology. Abacus's coverage and deliberations of earlier
            symposia have been a grand success with insatiable thirst for
            technological development rejuvenating the technology with
            innovation. This year, Abacus is back offline on a grander scale
            with an innovative edge to all the events.
          </p>
          <button className='button'>Read More</button>
          </div>
        </div>
        <img className='border'
              src={require('../assets/images/border.png')}
              alt="Abacus Logo"
            />
      </div>

      {/* Developers Section */}
      <div className="developers">
        <h2>#developers</h2>
        <div className="developers-grid">
          <div className="developer-card">
            <img
              src="path/to/harini_image.jpg"
              alt="Harini Natarajan"
              className="developer-photo"
            />
            <h3>Harini Natarajan</h3>
            <p>//Frontend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
          <div className="developer-card">
            <img
              src="path/to/sivani_image.jpg"
              alt="Sivanipriya"
              className="developer-photo"
            />
            <h3>Sivanipriya</h3>
            <p>//Frontend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
          <div className="developer-card">
            <img
              src="path/to/viswesswar_image.jpg"
              alt="Viswesswar"
              className="developer-photo"
            />
            <h3>Viswesswar</h3>
            <p>//Backend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
          <div className="developer-card">
            <img
              src="path/to/lakshay_image.jpg"
              alt="Lakshay"
              className="developer-photo"
            />
            <h3>Lakshay</h3>
            <p>//Backend Developer</p>
            <button>LinkedIn ↔</button>
          </div>
        </div>
      </div>
       {/* Footer Section */}
       <div class="footer">
    <span id="contact"></span>
    <div class="head">
        <h1>
            <span>#</span>
            <span>contacts</span>
        </h1>
        <div class="line"></div>
    </div>
    <div class="body">
        <div class="leftbox">
            <div class="locationbox">
                <div class="locatehead">Locate</div>
                <div class="locatebody">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.37518444508!2d80.23412206399604!3d13.011763417518218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1659372958426!5m2!1sen!2sin" title="Map" height="200"></iframe>
                    <div class="college">
                        <div>College of Engineering</div>
                        <div>Guindy, (CEG - Anna University), Chennai 600028</div>
                    </div>
                </div>
            </div>
            <div class="mediabox">
                <p>Media</p>
                <div class="icons">
                    <a href="https://www.instagram.com/csea_ceg/" target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/csea.ceg" target="_blank">Facebook</a>
                    <a href="https://www.linkedin.com/company/csea-ceg/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
        <div class="phonebox">
            <div class="phonehead">Phone</div>
            <div class="contacts">
                <div class="phonecard">
                    <div>Name 1</div>
                    <div>Phone Number 1</div>
                </div>
                <div class="phonecard">
                    <div>Name 2</div>
                    <div>Phone Number 2</div>
                </div>
            </div>
        </div>
        <div class="email-box">
            <p>Collaborate with us!</p>
            <a href="mailto:cseaceg24@gmail.com" target="_blank">
                <p>cseaceg24@gmail.com</p>
            </a>
            <a href="mailto:marketing@abacus.org.in" target="_blank">
                <p>marketing@abacus.org.in</p>
            </a>
        </div>
        <div class="querybox">
            <div>Send your Queries</div>
            <form>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="message" placeholder="Message" rows="4" required></textarea>
                <button type="submit">Send {"<"}~{">"}</button>
            </form>
        </div>
    </div>
    <div class="footerline">&copy; Copyright 2024 CSEA. All rights reserved.</div>
</div>

    </div>

     
  );
};

export default HomePage;
