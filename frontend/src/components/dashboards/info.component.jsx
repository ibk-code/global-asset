import React from "react";

import "./info.component.css";

function UserInfo() {
  return (
    <div className="userinfo">
      <p>
        Name : <span>juce</span>
      </p>
      <p>
        Email : <span>mark@gmail.com</span>
      </p>
      <p>
        wallet Adress: <span>hjfgksjhsfdg</span>
      </p>
      <p>
        Referal Count: <span>90</span>{" "}
      </p>
    </div>
  );
}

export default UserInfo;
