import React from "react";

import "./user.style.css";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import Dash from "../../components/dash";
import history from '../../history'
import {GlobalContext} from '../../GlobalContextClass'

class User extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          !context.state.loggedIn ?
          history.push('/Login') :
          <React.Fragment>
            <div>
              <Header />
              <Dash />
              <Foot />
            </div>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}

export default User;
