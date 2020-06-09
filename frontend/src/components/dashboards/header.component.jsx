import React from "react";
import "./header.style.css";
import {GlobalContext} from '../../GlobalContextClass'

function Header() {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="header">
            <div className="logo"> GLOBAL ASSET </div>

            <div className="logout" onClick={context.logout}>LOG OUT</div>
          </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

export default Header;
