import React, { useState } from 'react';
import axios from "axios";
import './Styles/contact.css'; // Import your CSS file for styling

const ContactUs = () => {
  // State for email and message fields
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send email and message data to backend or perform desired action
    console.log('Email:', email);
    console.log('Message:', message);
    try {
      await axios.post("https://deeplearningwebsiteserver.onrender.com/api/send", {
        from: "machinelearning224@gmail.com",  
        email,
        message
      });
      alert("Email sent!");      
    } catch(err) {
      alert(err);
    }
    // Reset form fields after submission
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
        <iframe className='contactimg'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.9586357807048!2d85.33777717445818!3d23.353513103898948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e191c8555555%3A0x502b350a7349da30!2sPrachin%20Ram%20Mandir%2CChutia%2CRanchi%2CJharkhand!5e0!3m2!1sen!2sin!4v1707243889344!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
