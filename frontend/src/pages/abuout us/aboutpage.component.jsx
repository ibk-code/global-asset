import React from "react";
import "./aboutpage.css";

import Footer from "../../components/footer/footer.component";
import Plans from "../../components/plans/plans.component";
import Head2 from "../../components/head2/head2.component";

function AboutPage() {
  return (
    <div className="about">
      <Head2> About Us </Head2>
      <div className="more">
        <h2>Global Asset </h2>
        <div className="more-about">
          <div className="text-section">
            <p>
              World Invest world-invest.net. Is a private online investment
              company that has been legally registered in Canada. (Company
              No.10951236) company provides its website as a service to its
              present and prospective clients to make investments online and
              gain daily stable profit. Its aim is to provide a secure and
              stimulating investing environment for all its users. We wish to
              build a mutually beneficial and long lasting business relationship
              with all our clients. We work in the field of Bitcoin mining and
              trading, Cryptocurrency, forex, and real estate investment. We
              have realized many of the profits in these areas and we want to
              expand our investment in Partnership with our members from all
              over the world. We have a team at the highest level and
              professional in the previous fields also our company has a reserve
              capital to manage all risks well, We work in this field for 5
              years even though foreign exchange trading is a highly lucrative
              field, it takes experienced and well-trained individuals to
              exploit the market In the most profitable way and that is exactly
              where our state of uniqueness comes. From Investing to financial
              planning and pricing, our goal is to be straightforward and help
              with your unique needs. The protection of your portfolio and
              personal information is the foundation of our relationship. That
              is why we offer the ultimate benefit - Peace of mind. We are here
              to help you maximize every trade with our tools, research, and
              execution. We offer industry-leading investment research and
              analysis to help you with all of your trading strategies.
            </p>
          </div>
          <div className="image-section" alt="">
            <img src="/images/semiiiii.jpg" alt=""></img>
            <h2>Certification</h2>
            <img className="img2" src="/images/certificate.jpeg" alt=""></img>
          </div>
        </div>
      </div>
      <Plans /> <Footer />
    </div>
  );
}

export default AboutPage;
