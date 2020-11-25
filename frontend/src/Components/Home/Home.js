import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import HomeOne from "./Home_One";
import HomeTwo from "./Home_Two";
import HomeThree from "./Home_Three";

import SocialMediaHandles from "./SocialMediaHandles";

const scrollToRef = (ref) => window.scrollTo(-100, ref.current.offsetTop);
function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div className="home">
      <Navbar activeTab={"Home"} />
      <div className="home__body">
        <HomeOne handleClick={executeScroll} />
        <HomeTwo page_two={myRef} />
        <HomeThree />
        <SocialMediaHandles />
      </div>
    </div>
  );
}
export default Home;
