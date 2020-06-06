import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import Deposite from "./deposit.component";

function Deposit() {
  return (
    <div className="deposit">
      <Header />
      <div className="flexer">
        <UserId /> <Deposite />
      </div>
      <Foot />
    </div>
  );
}

export default Deposit;
