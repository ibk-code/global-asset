import React from "react";
import "./admin.style.css";

function AdminUser() {
  return (
    <React.Fragment>
      <tr>
        <td>123456987</td>
        <td>john</td>
        <td>John@yahoo.com</td>
        <td className="special">
          {" "}
          <input type="btc" className="inner" plceholder="input BTC" />{" "}
        </td>
        <td>
          <div className="add-btn"> ADD</div>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default AdminUser;
