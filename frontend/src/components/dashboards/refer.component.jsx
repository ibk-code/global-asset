import React from "react";
import "./refer.css";
import { GlobalContext } from "../../GlobalContextClass";
import history from '../../history'

function Refer() {
  const copy = (e) => {
    e.preventDefault();
    const text = document.getElementById("refer-text");
    text.select();
    document.execCommand("copy");
  };
  return (
    <GlobalContext.Consumer>
      {(context) => (
        // !context.loggedIn ?  history.push('/Login') :
        <React.Fragment>
          <div className="refer">
            <div className="ref1">
              <h2>Referal Link</h2>
              <form className="form1">
                <input
                  name="text"
                  type="text"
                  id="refer-text"
                  value={`http://localhost:3000/Signup?referralId=${context.state.userId}`}
                />
                <button className="copy" onClick={copy}>
                  {" "}
                  COPY{" "}
                </button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}
    </GlobalContext.Consumer>
  );
}
export default Refer;
