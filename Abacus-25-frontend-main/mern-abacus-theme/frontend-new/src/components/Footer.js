import React, { useContext, useEffect, useState } from 'react';
import { contactsData } from '../../constants';
import PhoneCard from '../PhoneCard/Phone';
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const QueryForm = () => {
    const { handleSubmitQuery, auth, user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "", email: "", title: "", message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitQuery({ ...formData, email: auth ? user.email : formData.email, name: auth ? user.name : formData.name });
        setFormData({
            name: "", email: "", title: "", message: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {!auth && (
                <>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </>
            )}
            <input 
                type="text" 
                name="title" 
                placeholder="Title" 
                value={formData.title} 
                onChange={handleChange} 
                required 
            />
            <textarea 
                placeholder="Message" 
                rows={4} 
                cols={15} 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
            ></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

const MediaIcons = () => {
    return (
        <div>
            <p>Media</p>
            <div>
                <Link to={'https://www.instagram.com/csea_ceg/'} target="_blank">
                    <FaInstagram />
                </Link>
                <Link to={'https://www.facebook.com/csea.ceg'} target="_blank">
                    <FaFacebook />
                </Link>
                <Link to={'https://www.linkedin.com/company/csea-ceg/'} target="_blank">
                    <CiLinkedin />
                </Link>
            </div>
        </div>
    );
};

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <div>
            <div>
                <h1>Contacts</h1>
            </div>
            <div>
                <div>
                    <div>
                        <div>Locate</div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.37518444508!2d80.23412206399604!3d13.011763417518218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1659372958426!5m2!1sen!2sin" 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            title="Map" 
                            height="200">
                        </iframe>
                        <div>
                            <div>College of Engineering</div>
                            <div>Guindy, (CEG - Anna University), Chennai 600028</div>
                        </div>
                    </div>
                    {!isMobile && <MediaIcons />}
                </div>
                <div>
                    <div>
                        <div>Phone</div>
                        <div>
                            {contactsData.map(({ name, phone }) => (
                                <PhoneCard key={name} name={name} phone={phone} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Collaborate with us!</p>
                        <a href="mailto:cseaceg24@gmail.com" target="_blank">
                            <p>cseaceg24@gmail.com</p>
                        </a>
                        <a href="mailto:marketing@abacus.org.in" target="_blank">
                            <p>marketing@abacus.org.in</p>
                        </a>
                    </div>
                </div>
                <div>
                    <div>Send your Queries</div>
                    <QueryForm />
                </div>
                {isMobile && <MediaIcons />}
            </div>
            <div>&copy; Copyright 2024 CSEA. All rights reserved.</div>
        </div>
    );
};

export default Footer;
