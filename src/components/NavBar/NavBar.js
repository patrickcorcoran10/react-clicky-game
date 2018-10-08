import React from "react";
import "./NavBar.css";


const Navbar = () => (
    <nav className="navbar">
      <p>Pick-to-Click Game</p>
      <p>Click an Image to Begin</p>
      <p>Score: 
      {/* {score}  */}
      | Top Score: 
      {/* {topScore}  */}
      </p>
    </nav>
  );
  
  export default Navbar;