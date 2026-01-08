import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";
import backgroundVideo from "../assets/normal.mp4"; // Import your video file

function Contact() {
  return (
    <div className="contact-container">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <Navbar />

      <div className="contact-header text-white py-5">
        <div className="container text-center fade-in-top">
          <h1 className="display-4 fw-bold" id="Contact">Contact Me</h1>
          <p className="lead">I'd love to hear from you!</p>
        </div>
      </div>

      <div className="container my-5 fade-in">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-6 slide-in-left">
            <h2>Contact Information</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:your@email.com">silviyamahalingam@gmail.com</a>
              </li>
              <li className="mb-3">
                <strong>Phone:</strong> +9597816102
              </li>
              <li className="mb-3">
                <strong>Location:</strong> Coimbatore, India
              </li>
              <li className="mb-3">
                <strong>Find me on:</strong>
                <div className="social-icons mt-2">
                  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </li>
            </ul>

            {/* Embedded Google Maps */}
            <div className="mt-4">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.206649476543!2d76.9646!3d10.9885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85a47ea29df4f%3A0xc8f9c53fd7ff7f04!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1618814414106!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 slide-in-right">
            <h2 id="send">Send a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 hover-bounce">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;