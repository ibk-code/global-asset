import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import {GlobalContext} from '../../GlobalContextClass'

function Header() {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="header">
            <div className="logo">
              {" "}
              <Link to="/"> GLOBAL ASSET </Link>
            </div>
            <div className="logout" onClick={context.logout}>LOG OUT</div>
          </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

export default Header;
