import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";
import "./Profile.css";

function Profile() {
  const [color, setColor] = useState(0);
  const profileContents = [
    { key: 1, functionality: "Profile", to: "/profile_page" },
    { key: 2, functionality: "Login", to: "/login" },
    { key: 3, functionality: "Registeration", to: "/registeration" },
  ];
  return (
    <div>
      <Link className="d-flex flex-column p-2 m-1 justify-content-center align-items-center min-vw-20 min-vh-30 ">
        <div className={window.innerWidth < 900 ? "dropdown" : "dropleft"}>
          <BsPeopleCircle
            size="25px"
            className="dropdown-toggle onHover"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            color={color === 1 ? "grey" : "white"}
            onMouseEnter={() => setColor(1)}
            onMouseLeave={() => setColor(0)}
          />

          <div
            className="dropdown-menu position-absolute profile-dropMenu"
            aria-labelledby="dropdownMenuButton"
          >
            {profileContents.map((item) => {
              return (
                <Link key={item.key} className="dropdown-item" to={item.to}>
                  {item.functionality}
                </Link>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Profile;
