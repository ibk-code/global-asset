import React from "react";

import "./with.css";

function With() {
  return (
    <div className="with">
      <form id="form">
        <div className="with1">
          <label>Wallet Address</label>
          <input
            name="text"
            type="text"
            placeholder="Wallet Address"
            required
          />
        </div>
        <div className="with2">
          <label>Withdraw Amount</label>
          <input
            name="text"
            type="text"
            placeholder="Withdraw Amount"
            required
          />
        </div>
        <button className="with3">Withdraw</button>
      </form>
    </div>
  );
}
export default With;
