import React, { useEffect } from "react";
import Navbar from "../Home/Navbar/Navbar";

function Portfolio() {
  useEffect(() => {
    document.title = "Login EventHub";
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Portfolio;
