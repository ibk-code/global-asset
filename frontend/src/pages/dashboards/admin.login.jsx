import React from "react";

import "./admin.style.css";

class AdminSignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-fields">
          <form id="login">
            <h2>Admin </h2>

            <label>Email </label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email"
              required
            />
            <label>Password </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="password"
              required
            />

            <button type="submit">Sign In </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default AdminSignIn;
