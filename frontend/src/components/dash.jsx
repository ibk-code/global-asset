import React from "react";
import UserId from "../../src/components/userid";
import "./dash.css";
import { GlobalContext } from "../GlobalContextClass";

function Dash() {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="dash">
            <UserId />

            <div className="right">
              <div className="parameters">
                <div className="top">
                  <div className="wallet-address">
                    Wallet address :<span>{context.state.walletAddress}</span>
                  </div>
                  <div className="plan">
                    PLAN: <span>{context.state.plan}</span>{" "}
                  </div>
                </div>
                <div className="para">
                  <div className="balance">
                    <h2>Available Balance</h2>
                    <p>{context.state.btcBalance} BTC</p>
                  </div>

                  <div className="total-deposit">
                    <h2>Total Deposit </h2>
                    <p>{context.state.deposit}</p>
                  </div>

                  <div className="referals">
                    <h2>Total Referals</h2>
                    <p>{context.state.totalReferrals}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}

export default Dash;
