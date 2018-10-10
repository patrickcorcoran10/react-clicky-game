import React from "react";
import "./NavBar.css";


const Navbar = props => (
    <div>
    <nav>
      <p className="message">{props.message}</p>
      <br/>
      <p className="scores">
      Score:  {props.score}    |    Top Score:  {props.topscore}
      </p>
    </nav>
    </div>
  );
  
  export default Navbar;