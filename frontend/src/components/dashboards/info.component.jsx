import React from "react";
import {GlobalContext} from '../../GlobalContextClass';
import "./info.component.css";

function UserInfo() {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <React.Fragment>
           <div className="userinfo">
              <p>
                Name : <span>{context.state.name}</span>
              </p>
              <p>
                Email : <span>{context.state.email}</span>
              </p>
              <p>
                wallet Adress: <span>{context.state.walletAddress}</span>
              </p>
              <p>
                Referal Count: <span>{context.state.totalReferrals}</span>{" "}
              </p>
            </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

export default UserInfo;
