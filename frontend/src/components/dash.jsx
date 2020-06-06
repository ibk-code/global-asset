import React from "react";
import UserId from "../../src/components/userid";
import "./dash.css";

function Dash() {
  return (
    <div className="dash">
      <UserId />

      <div className="right">
        <div className="parameters">
          <div className="top">
            <div className="wallet-address">
              Wallet address :<span> ??????????</span>
            </div>
            <div className="plan">
              PLAN: <span>Gold Plan</span>{" "}
            </div>
          </div>
          <div className="para">
            <div className="balance">
              <h2>Available Balance </h2>
              <p>10 BTC</p>
            </div>

            <div className="total-deposit">
              <h2>Total Deposit </h2>
              <p>10 BTC</p>
            </div>

            <div className="referals">
              <h2>Total Referals</h2>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
