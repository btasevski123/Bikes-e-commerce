import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="row footer bg-light py-5">
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h2 className="h5 font-weight-bold">Social share</h2>
        <div className="share-icons">
          <a
            href="https://www.facebook.com/"
            className="bg-warning text-white d-inline-flex justify-content-center align-items-center mr-2 text-decoration-none"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            className="bg-warning text-white d-inline-flex justify-content-center align-items-center mr-2 text-decoration-none"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="bg-warning text-white d-inline-flex justify-content-center align-items-center mr-2 text-decoration-none"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            className="bg-warning text-white d-inline-flex justify-content-center align-items-center text-decoration-none"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h2 className="h5 font-weight-bold">Event info</h2>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="/" className="text-dark">
              Enter Now
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Event Info
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Course Maps
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Race Pack
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Results
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              FAQs
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Am I Registered?
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h2 className="h5 font-weight-bold">Registration</h2>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="/" className="text-dark">
              Volunteers
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Gallery
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Press
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Results
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Service Plus
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h2 className="h5 font-weight-bold">Schedule</h2>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="/" className="text-dark">
              Gallery
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Videos
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Results
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              FAQs
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Results
            </a>
          </li>
          <li>
            <a href="/" className="text-dark">
              Volunteers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
