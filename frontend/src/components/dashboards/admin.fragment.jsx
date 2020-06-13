import React from "react";
import "./admin.style.css";

function AdminUser(props) {
  return (
    <React.Fragment>
      <tr data-key={props.ekey}>
        <td>{props.btcId}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td className="special">
          {" "}
          <input type="text" className="inner" plceholder="input BTC" onChange={props.chang}/>{" "}
        </td>
        <td>
          <div className="add-btn" onClick={props.addBtc}> ADD</div>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default AdminUser;
