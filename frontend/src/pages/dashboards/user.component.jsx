import React from "react";

import "./user.style.css";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import Dash from "../../components/dash";

class User extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Dash />
        <Foot />
      </div>
    );
  }
}

export default User;
