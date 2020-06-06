import React from "react";

import "./footer.style.css";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function Foot() {
  return (
    <div className="footer">
      <div className="fav">
        <h3>GLOBAL ASSET </h3>
        <p>Copyright Global-asset 2020 </p>

        <p className="side">
          <FaTwitter /> +234 808 4558 874
        </p>
      </div>
    </div>
  );
}

export default Foot;
