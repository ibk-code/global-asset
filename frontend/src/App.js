import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/abuout us/aboutpage.component";
import ContactUs from "./pages/contact us/contactus.component";
import LogIn from "./pages/login page/loginpage.component";
import Signup from './pages/signupp/signup.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/Login" component={LogIn} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
