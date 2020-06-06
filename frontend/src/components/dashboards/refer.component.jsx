import React from "react";
import "./refer.css";
function Refer() {
  const copy = (e) => {
    e.preventDefault();
    const text = document.getElementById("refer-text");
    text.select();
    document.execCommand("copy");
  };
  return (
    <div className="refer">
      <div className="ref1">
        <h2>Referal Link</h2>
        <form className="form1">
          <input
            name="text"
            type="text"
            id="refer-text"
            value="https://global-asset.com/blabla"
          />
          <button className="copy" onClick={copy}>
            {" "}
            COPY{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Refer;
