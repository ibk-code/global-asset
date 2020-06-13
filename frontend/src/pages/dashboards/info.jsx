import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import UserInfo from "../../components/dashboards/info.component";
import history from "../../history";
import { GlobalContext } from "../../GlobalContextClass";

class Info extends React.Component {
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
                  <UserId />
                  <UserInfo />
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

export default Info;
