import React from "react";

import "./admin.style.css";
import AdminUser from "./admin.fragment";

class AdminTable extends React.Component {
  render() {
    return (
      <div className="table-component">
        <table>
          <thead>
            <tr>
              <th>Wallet Adress </th>
              <th>Name </th>
              <th>Email </th>
              <th>Add BTC</th>
            </tr>
          </thead>
          <tbody>
            <AdminUser />
          </tbody>
        </table>
      </div>
    );
  }
}
export default AdminTable;
