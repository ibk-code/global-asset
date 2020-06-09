import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import With from "../../components/dashboards/with";

function Witthdraw() {
  return (
    <div className="deposit">
      <Header />
      <div className="flexer">
        <UserId /> <With />
      </div>
      <Foot />
    </div>
  );
}

export default Witthdraw;
