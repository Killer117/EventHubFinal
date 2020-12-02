import React, { useEffect } from "react";
import "./registerationPage.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { setLoginStatus } from "../../../data/Data";
import { setUserRegister } from "../../../data/Data";
import regImage from "../../../pictures/regImage.png";

function CompanyRegisterationPage() {
  const history = useHistory();
  useEffect(() => {
    document.title = "Company Registeration";
  }, []);
  const handleRegFormSubmit = (event) => {
    event.preventDefault();
    setLoginStatus(true);
    setUserRegister(false);
    history.push("/company");
  };
  return (
    <div className="regPage">
      <Navbar />
      <div className="regPage-bgImage">
        {" "}
        <div className="regPage-left">
          <img src={regImage} alt="regImage" />
        </div>
        <div className="regPage-regForm">
          <p className="regPage-heading">Company Registeration</p>
          <form
            className="regPage-form "
            action="#"
            onSubmit={handleRegFormSubmit}
          >
            <div className="form-row">
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <label for="inputEmail4">Company Name</label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-sm-6 col-xs-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div class="form-group col-md-6 col-sm-6 col-xs-6">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-sm-6 col-xs-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-6">
                <label for="inputPassword4">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 col-sm-6 col-xs-6">
                <label for="inputAddress">Mobile no.</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">+91</span>
                  </div>
                  <input type="tel" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-6">
                <label for="inputAddress">Landline no.</label>
                <div className="input-group mb-3">
                  <input type="tel" className="form-control" placeholder="" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4 col-sm-4 col-xs-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Kolkata</option>
                  <option>Chennai</option>
                  <option>Bengaluru</option>
                  <option>Punjab</option>
                  <option>Gujrat</option>
                </select>
              </div>
              <div className="form-group col-md-4 col-sm-4 col-xs-4">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4 col-sm-4 col-xs-4">
                <label for="inputZip">Pincode</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <Link className="ml-2" to="/login">
              Already a member?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegisterationPage;
