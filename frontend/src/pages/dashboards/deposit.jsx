import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import Deposite from "./deposit.component";
import history from "../../history";
import { GlobalContext } from "../../GlobalContextClass";

class Deposit extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) =>
          !context.state.loggedIn ? (
            history.push("/Login")
          ) : (
            <React.Fragment>
              <div className="deposit">
                <Header />
                <div className="flexer">
                  <UserId /> <Deposite />
                </div>
                <Foot />
              </div>
            </React.Fragment>
          )
        }
      </GlobalContext.Consumer>
    );
  }
}

export default Deposit;
