import React from "react";
import Head2 from "../../components/head2/head2.component";
import HomepageBody from "../../components/homepage body/homepagebody.component";
import Footer from "../../components/footer/footer.component";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home">
      <Head2>
        <div className="hero-text">
          <h2>
            <p>The best investment</p>
            <p>Platform To Earn</p>
            <p>At Ease</p>
          </h2>
          <Link to="/login">Get Started</Link>
        </div>
      </Head2>
      <HomepageBody />
      <Footer />
    </div>
  );
}

export default HomePage;
