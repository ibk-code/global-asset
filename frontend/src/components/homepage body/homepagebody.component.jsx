import React from "react";
import "./homepagebody.style.css";
import Plans from "../plans/plans.component";
import { Link } from "react-router-dom";

function HomepageBody() {
  return (
    <div className="homepage-body">
      <div className="section-one">
        <div className="mini-section">
          <img src="/images/undraw_wallet_aym5.svg" alt=""></img>
          <h3>INSTANT WITHDRAWAL</h3>
        </div>
        <div className="mini-section">
          <img src="/images/undraw_digital_currency_qpak.svg" alt=""></img>
          <h3> NO FEES </h3>
        </div>
        <div className="mini-section">
          <img src="/images/undraw_savings_dwkw.svg" alt=""></img>
          <h3>AUTOMATED DEPOSITS</h3>
        </div>
        <div className="mini-section">
          <img src="/images/undraw_stand_out_1oag.svg" alt=""></img>
          <h3>EXPERT TRADERS</h3>
        </div>
      </div>

      <div className="section-two">
        <h2>Welcome To Global Asset </h2>
        <p>
          The best Crypto currency platform that works in and automated way we
          offer a No-Experience Trading Method to help you remove unecesary
          risks Global asset Excels in Every Aspect of the Crypto market.
        </p>
      </div>
      <div className="sos">
        <div className="section-three">
          <p>
            Global asset company is an international financial organization, the
            main activity of which is trading on the world’s largest monetary
            and financial market called Forex. Currency exchange trading opens
            lots of opportunities of trader’s as well as investors’ financial
            development and allows legally earning hundreds, even thousands of
            dollars per day However, currency exchange trading is a complicated
            system with plenty of different nuances which often interfere with
            earning even experienced traders.
            <Link to="/about"> More About us </Link>
          </p>

          <img src="/images/semiiiii.jpg" alt=""></img>
        </div>
      </div>

      <Plans />

      <div className="section-five">
        <h2>SERVICES WE OFFER</h2>
        <p>See The Benefits You Can Get By Working With Our Experts</p>
      </div>

      <div className="section-six">
        <div className="mini">
          <img src="/images/return.svg" alt=""></img>
          <h3>INSTANT EFFECT</h3>
          <p>
            All operations within our system, including financial transactions
            and statistical reporting, occur in real time
          </p>
        </div>
        <div className="mini">
          <img src="/images/money.svg" alt=""></img>
          <h3> 100% Profit Guarantee </h3>
          <p>
            With our expertise we guarantee you the best profits in the market.
            No one can beat us. With us you will enjoy the safest and the best
            profit rates.{" "}
          </p>
        </div>
        <div className="mini">
          <img src="/images/cctv.svg" alt=""></img>
          <h3>Easy & Convinient</h3>
          <p>
            You invest your money, and we take care of the rest, providing you
            with convenient, user-friendly tools for controlling your funds
          </p>
        </div>
        <div className="mini">
          <img src="/images/list.svg" alt=""></img>
          <h3>Technology For Your Benefit</h3>
          <p>
            We provide investors with a unique array of features running on a
            solid technological base we have developed
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomepageBody;
