import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import AdminTable from "../../components/dashboards/admin.component";
import { GlobalContext } from "../../GlobalContextClass";
import history from "../../history";

class Admin extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) =>
          !context.state.adminLoggedIn ? (
            history.push("/adminlogin")
          ) : (
            <React.Fragment>
              <div className="deposit">
                <Header />
                <AdminTable />
                <Foot />
              </div>
            </React.Fragment>
          )
        }
      </GlobalContext.Consumer>
    );
  }
}

export default Admin;
