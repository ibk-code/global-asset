import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/abuout us/aboutpage.component";
import ContactUs from "./pages/contact us/contactus.component";
import LogIn from "./pages/login page/loginpage.component";
import Signup from "./pages/signupp/signup.component";
import Admin from "../src/pages/dashboards/admin.component";
import User from "../src/pages/dashboards/user.component";
import Dash from "../src/components/dash";
import Referal from "./pages/dashboards/referal";
import Deposit from "./pages/dashboards/deposit";
import Withdraw from "./pages/dashboards/withdraw";
import Info from "./pages/dashboards/info";
import Forgot from "./pages/signupp/forgot";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/Login" component={LogIn} />
        <Route path="/Signup" component={Signup} />
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/referal" component={Referal} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/admin" component={Admin} />
        <Route path="/info" component={Info} />
        <Route path="/forgot" component={Forgot} />
      </Switch>
    </div>
  );
}

export default App;
