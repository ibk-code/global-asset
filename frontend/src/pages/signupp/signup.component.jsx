import React from "react";

import "./signup.style.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalContextClass";

class Signup extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div className="input-fields">
              <form id="login" onSubmit={context.login}>
                <h2>Sign In </h2>

                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="email"
                  required
                  onChange={context.updateEmail}
                />
                <label>Password </label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="password"
                  required
                  onChange={context.updatePassword}
                />
                <p>
                  Dont Have an Account ?<Link to="/Login"> Sign Up </Link>
                </p>
                <p className="forgot">
                  <Link to="/forgot"> Forgot Password </Link>
                </p>

                <button type="submit">Sign In </button>
              </form>
            </div>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}
export default Signup;
