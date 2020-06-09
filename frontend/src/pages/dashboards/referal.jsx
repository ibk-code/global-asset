import React from "react";

import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";

import Refer from "../../components/dashboards/refer.component";

function Referal() {
  return (
    <div classNmae="referal">
      <Header />
      <div className="flexer">
        <UserId /> <Refer />
      </div>
      <Foot />
    </div>
  );
}

export default Referal;
