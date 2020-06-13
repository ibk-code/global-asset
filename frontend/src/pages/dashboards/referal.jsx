import React from "react";

import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";

import Refer from "../../components/dashboards/refer.component";
import history from "../../history";
import { GlobalContext } from "../../GlobalContextClass";

class Referal extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) =>
          !context.state.loggedIn ? (
            history.push("/Login")
          ) : (
            <div className="referal">
              <Header />
              <div className="flexer">
                <UserId /> <Refer />
              </div>
              <Foot />
            </div>
          )
        }
      </GlobalContext.Consumer>
    );
  }
}

export default Referal;
