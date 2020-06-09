import React from "react";

import "./dash.css";
import { FaRegUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContextClass";

function UserId() {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="left">
            <div className="user-id">
              <Link to="/user">
                <FaRegUser className="font" />
                <p>{context.state.name}</p>
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
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

export default UserId;
