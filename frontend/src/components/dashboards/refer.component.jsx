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
            value="http://localhost:3000/login?4577iuklg"
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
