import React from "react";
import { GlobalContext } from "../../GlobalContextClass";

import "./with.css";

function With() {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="with">
            <form id="form" onSubmit={context.withdraw}>
              <div className="with1">
                <label>Wallet Address</label>
                <input
                  name="text"
                  type="text"
                  placeholder="Wallet Address"
                  required
                  onChange={context.updateWithdrawAddr}
                />
              </div>
              <div className="with2">
                <label>Withdraw Amount</label>
                <input
                  name="text"
                  type="text"
                  placeholder="Withdraw Amount"
                  required
                  onChange={context.updateWithdrawAmt}
                />
              </div>
              <button className="with3" type="submit">Withdraw</button>
            </form>
          </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}
export default With;
