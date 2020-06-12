import React from "react";

import "./head2.style.css";

import { Link } from "react-router-dom";

function Head2({ children }) {
  return (
    <div className="hero">
      <div className="navigation">
        <div className="logo">
          <h2>
            <Link to="/">Global Asset</Link>
          </h2>
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
            <Link to="/Login">Sign In </Link>
          </li>
          <li>
            <Link to="/Signup"> Sign Up </Link>
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
