import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/"> GLOBAL ASSET </Link>
      </div>

      <div className="logout">LOG OUT</div>
    </div>
  );
}

export default Header;
