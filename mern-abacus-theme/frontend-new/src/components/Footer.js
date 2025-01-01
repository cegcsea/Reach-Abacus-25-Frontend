import "../styles/Footer.css";

const Footer = () => {
  return (
    <div class="footer scroll-mt-28" id="contact">
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.37518444508!2d80.23412206399604!3d13.011763417518218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1659372958426!5m2!1sen!2sin"
                title="Map"
                height="200"
              ></iframe>
              <div class="college">
                <div>College of Engineering</div>
                <div>Guindy, (CEG - Anna University), Chennai 600028</div>
              </div>
            </div>
          </div>
          <div class="mediabox">
            <p>Media</p>
            <div class="icons">
              <a href="https://www.instagram.com/csea_ceg/" target="_blank">
                Instagram
              </a>
              <a href="https://www.facebook.com/csea.ceg" target="_blank">
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/csea-ceg/"
                target="_blank"
              >
                LinkedIn
              </a>
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
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
            <button type="submit">
              Send {"<"}~{">"}
            </button>
          </form>
        </div>
      </div>
      <div class="footerline">
        &copy; Copyright 2024 CSEA. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
