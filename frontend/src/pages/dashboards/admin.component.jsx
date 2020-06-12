import React from "react";
import "./other.style.css";
import UserId from "../../components/userid";
import Header from "../../components/dashboards/header.component";
import Foot from "../../components/dashboards/footer.component";
import AdminTable from "../../components/dashboards/admin.component";

function Admin() {
  return (
    <div className="deposit">
      <Header />
      <AdminTable />
      <Foot />
    </div>
  );
}

export default Admin;
