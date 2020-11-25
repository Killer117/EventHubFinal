import React, { useEffect,useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import "./ProfilePage.css";
import imgProfile from "../../../pictures/imgProfile.png";
import axios from "axios";

function ProfilePage() {
  useEffect(() => {
    document.title = "Profile";
  },[]);
  
  const profile_info = [
    { key: 1, label: "E-Mail : ", data: "abcxyz123@abc.com" },
    { key: 2, label: "Date of Birth : ", data: "xx/xx/xxxx" },
    { key: 3, label: "Gender : ", data: "Male" },
    { key: 4, label: "Mobile no. : ", data: "(+91) 1234567890" },
    { key: 5, label: "Address : ", data: "WZ-123 abc xyz" },
    { key: 6, label: "State : ", data: "Delhi" },
    { key: 7, label: "City : ", data: "New Delhi" },
    { key: 8, label: "Pincode : ", data: "xxxxxx" },
  ];
  return (
    <div className="profilePage">
      <Navbar />
      <div className="profile-Content">
        <div className="profile-bg"></div>
        <div className="profile-info-one">
          <img src={imgProfile} className="imgProfile" alt="photos"/>
          <div className="profile-info-one-content">
            <p className="profile-info-one-content-name">
              <b>Name</b>
            </p>
            <p className="profile-info-one-content-bio">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <p className="profile-profileheader  text-center">Profile</p>
        <div className="profile-info-two">
          {profile_info.map((item) => {
            return (
              <div
                key={item.key}
                className="profile-info-two-information d-flex p-2 m-3"
              >
                <p className="mr-2">
                  <b>{item.label}</b>
                </p>
                <p className="ml-2 text-center">{item.data}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
