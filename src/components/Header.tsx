import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
      <a className="navbar-brand" href="/">
        <img src="/img/logo.png" alt="Logo" className="d-block w-100" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto text-uppercase font-weight-bold">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Вikes
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Gear
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Parts
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Tires
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Service-info
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Catalogues
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav text-uppercase font-weight-bold">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fas fa-shopping-bag"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
