import React from "react";

import "./signup.style.css";

class Forgot extends React.Component {
  constructor() {
    super();
    this.state = {
      email: " ",
      password: " ",
    };
  }

  render() {
    return (
      <div className="input-fields">
        <form id="login">
          <h2>Forgot Password </h2>

          <label>Registerd Email </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="email"
            required
          />
          <label>New Password </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="password"
            required
          />
          <div className="error"></div>
          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }
}
export default Forgot;
