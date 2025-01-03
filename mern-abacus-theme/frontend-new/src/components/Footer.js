import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp,FaMailBulk } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <h1 className="footer-heading !text-4xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#7245ad]">CONTACTS</h1> 
        {/* <!-- Added heading --> */}

        {/* <!-- Column for Locate and Media --> */}
        <div className="footer-combined-column">
            <div className="footer-column">
                <h1>Locate</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.37518444508!2d80.23412206399604!3d13.011763417518218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1659372958426!5m2!1sen!2sin"
                    title="Map"
                    class="map"
                    allowfullscreen=""
                    loading="lazy"></iframe>
                <p>College of Engineering Guindy, (CEG - Anna University), Chennai 600028</p>
            </div>
            <div className="footer-column">
                <h1>Media</h1>
                <div className="social-icons">
                    <a href="https://www.instagram.com/csea_ceg/" target="_blank">
                    <FaInstagram size={35} className='mr-5 hover:text-pink-500 transition-all' />
                    </a>
                    <a href="https://www.facebook.com/csea.ceg" target="_blank">
                    <FaFacebook size={35} className='mr-5 hover:text-blue-500 transition-all' />
                    </a>
                    <a href="https://www.linkedin.com/company/csea-ceg/" target="_blank">
                    <CiLinkedin size={35} className='mr-5 hover:text-blue-500 transition-all' />
                    </a>
                    <a href="#">
                    <FaWhatsapp size={35} className="hover:text-green-500 transition-all"/>
                    </a>
                </div>
            </div>
        </div>

        {/* <!-- Phone Section --> */}
        <div className="footer-column">
            <h1>Phone</h1>
            <div className="contact-card">
                <p>Saran Kumaran</p>
                <p>+91 9600544132</p>
            </div>
            <div className="contact-card">
                <p>Sruthi</p>
                <p>+91 8056284967</p>
            </div>
            <div className="contact-card">
                <p>Madhumithran</p>
                <p>+91 9566622358</p>
            </div>
            <div className="contact-card">
                <p>Sangami M</p>
                <p>+91 9942896494</p>
            </div>
        </div>
 
        {/* <!-- Queries Section --> */}
        <div className="footer-column">
            <h1>Send your Queries</h1>
            <form className="query-form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="message" placeholder="Message" rows="4" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
    <div className="footer-bottom">
        <p>Collaborate with us!</p>
        <a href="mailto:cseaceg24@gmail.com">cseaceg24@gmail.com</a>
        <a href="mailto:marketing@abacus.org.in">marketing@abacus.org.in</a>
    </div>
    <div className="footer-line">
        &copy; Copyright 2024 CSEA. All rights reserved.
    </div>
</div>
  );
};
export default Footer;
