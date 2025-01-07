// import React from 'react'
// import '../styles/contact.css'

// const Contact = () => {
//   return (
   
//           <div class="contact_details">
//          <div class="head">
//            <h3>Contacts</h3>
//            <p>For queries regarding events</p>
//          </div>
//          <div class="names">
//            <div>
//              <p><i class="fas fa-user"></i> Navaneeth</p>
//              <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
//            </div>
//            <div>
//              <p><i class="fas fa-user"></i> Navaneeth</p>
//              <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
//            </div>
//            <div>
//              <p><i class="fas fa-user"></i> Navaneeth</p>
//              <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
//            </div>
//            <div>
//              <p><i class="fas fa-user"></i> Navaneeth</p>
//              <p><a href="tel:+919042142160"><i class="fas fa-phone"></i> +91 9042142160</a></p>
//            </div>
//          </div>
//        </div>
    
//   )
// }

// export default Contact;
import React from "react";
import "../styles/contact.css";

const Contact = ({ contacts }) => {
  return (
    <div className="contact_details">
      {/* Header Section */}
      <div className="head">
        <h3>Contacts</h3>
        <p>For queries regarding events</p>
      </div>

      {/* Dynamically Rendered Contacts */}
      <div className="names">
        {contacts.map((contact) => (
          <div key={contact.id}>
            <p>
              <i className="fas fa-user"></i> {contact.name}
            </p>
            <p>
              <a href={`tel:${contact.phone}`}>
                <i className="fas fa-phone"></i> {contact.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
