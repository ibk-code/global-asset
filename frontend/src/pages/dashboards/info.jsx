import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import UserInfo from "../../components/dashboards/info.component";

function Info() {
  return (
    <div className="deposit">
      <Header />
      <div className="flexer">
        <UserId />
        <UserInfo />
      </div>
      <Foot />
    </div>
  );
}

export default Info;
