import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Portfolio from "./Components/PortfolioPage/Portfolio";
import Login from "./Components/AuxillaryPages/Login Page/Login";
import ProfilePage from "./Components/AuxillaryPages/Profile Page/ProfilePage";
import AboutUs from "./Components/AuxillaryPages/About Page/AboutUs";
import RegisterationPage from "./Components/AuxillaryPages/Registeration Page/RegisterationPage";
import ContactUs from "./Components/AuxillaryPages/Contact Us/ContactUs";
import FAQs from "./Components/AuxillaryPages/FAQs/FAQs";


import axios from "axios";



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/portfolio">
          <Portfolio />
        </Route> */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile_page">
          <ProfilePage />
        </Route>
        <Route exact path="/about_us">
          <AboutUs />
        </Route>
        <Route exact path="/registeration">
          <RegisterationPage />
        </Route>
        <Route exact path="/contact_us">
          <ContactUs />
        </Route>
        <Route exact path="/faqs">
          <FAQs />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

