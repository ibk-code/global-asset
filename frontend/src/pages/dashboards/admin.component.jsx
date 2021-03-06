import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";


function Admin() {
  return (
    <div className="deposit">
      <Header />
      <div className="flexer">
        <UserId />
      </div>
      <Foot />
    </div>
  );
}

export default Admin;
