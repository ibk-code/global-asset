import React from "react";

import "./dash.css";
import { FaRegUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserId() {
  return (
    <div className="left">
      <div className="user-id">
        <Link to="/user">
          <FaRegUser className="font" />
          <p>USERNAME</p>
        </Link>
      </div>

      <div className="user-option">
        <p>
          {" "}
          <Link to="/referal">
            {" "}
            <FaUsers className="icono" /> Referal link
          </Link>{" "}
        </p>
        <p>
          <Link to="/deposit">
            {" "}
            <FaUserPlus className="icono" /> Deposit
          </Link>
        </p>
        <p>
          <Link to="/withdraw">
            {" "}
            <FaUserMinus className="icono" /> withdraw
          </Link>
        </p>
        <p>
          <Link to="/admin">
            {" "}
            <FaUserEdit className="icono" /> info
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserId;
