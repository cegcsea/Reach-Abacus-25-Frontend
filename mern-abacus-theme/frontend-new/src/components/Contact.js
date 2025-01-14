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
