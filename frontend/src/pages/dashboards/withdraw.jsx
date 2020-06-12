import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import With from "../../components/dashboards/with";
import { GlobalContext } from "../../GlobalContextClass";
import history from '../../history'

class Witthdraw extends React.Component {
  
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
                  <UserId /> <With />
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

export default Witthdraw;
