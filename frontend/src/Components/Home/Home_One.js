import React from "react";
// import Home_Two from "./Home_Two";
function Home_One({ handleClick }) {
  return (
    <div>
      <div className="home__body__one  text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <p className="heading p-2 ">A HUB FOR ALL SORT OF EVENTS</p>
        <p className="sub_heading d-none d-sm-none d-lg-block">
          No need to surf websites for events booking
        </p>
        <p className="sub_sub_heading d-none d-sm-none d-lg-block">
          You can get all the events under a single hood
        </p>
        <button
          onClick={handleClick}
          type="submit"
          className="p-2 mt-4 border-0 getStarted"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default Home_One;
