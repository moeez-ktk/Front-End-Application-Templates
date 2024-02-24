import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Header />
      <div className="main-content">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries or feedback!</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
