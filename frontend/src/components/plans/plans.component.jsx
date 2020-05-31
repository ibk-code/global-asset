import React from "react";

import "./plans.style.css";
import { Link } from "react-router-dom";

function Plans() {
  return (
    <div className="plans">
      <div className="section-four">
        <div className="back-pad">
          <h3>DAY PLAN</h3>
          <p>7%</p>
          <p>After 24 Hours</p>
          <p>minimum - $30 </p>
          <p>Maximum - $5,000</p>
          <p>Ref Bonus - 5%</p>

          <div className="links">
            <Link to="/login">START NOW</Link>
          </div>
        </div>

        <div className="back-pad">
          <h3>3 DAY PLAN</h3>
          <p>25%</p>
          <p>After 3 Days</p>
          <p>minimum - $300 </p>
          <p>Maximum - $8,000</p>
          <p>Ref Bonus - 7%</p>

          <div className="links">
            <Link to="/login">START NOW</Link>
          </div>
        </div>

        <div className="back-pad">
          <h3>TRADER PLAN</h3>
          <p>80%</p>
          <p>After 21 DAYS</p>
          <p>minimum - $100 </p>
          <p>Maximum - $10,000</p>
          <p>Ref Bonus - 10%</p>

          <div className="links">
            <Link to="/login">START NOW</Link>
          </div>
        </div>
        <div className="back-pad">
          <h3>GOLD PLAN</h3>
          <p>20%</p>
          <p>After 24 Hours</p>
          <p>minimum - $1000 </p>
          <p>Maximum - $15,000</p>
          <p>Ref Bonus - 10%</p>

          <div className="links">
            <Link to="/login">START NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
