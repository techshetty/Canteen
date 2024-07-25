// src/pages/Contact.js
import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="comment">Comment *</label>
            <textarea id="comment" name="comment" rows={3} required></textarea>
          </div>
          
          <div className="form-row">
            <div className="form-group col-12 col-md-6">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <button type="submit" className="btn-primary">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
