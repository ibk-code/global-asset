import React from "react";

import "./head2.style.css";

import { Link } from "react-router-dom";

function Head2({ children }) {
  return (
    <div className="hero">
      <div className="navigation">
        <div className="logo">
          <p>
            <Link to="/">Global Asset</Link>
          </p>
        </div>

        <ul className="navigation-links">
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/"> | </Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
        </ul>

        <div className="user">
          <li>
            <Link to="/Signup">Sign In </Link>
          </li>
          <li>
            <Link to="/Login"> Sign Up </Link>
          </li>
        </div>
      </div>
      <div className="hero-text1">
        <h1 className="hero-text">{children}</h1>
      </div>
    </div>
  );
}

export default Head2;
