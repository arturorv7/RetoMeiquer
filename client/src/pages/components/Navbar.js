import React from "react";
import './navbar.css'
  const Navbar = ({brand}) => {
    return (
      <nav className="navbar dropShadow">
        <div>
          <h1>{brand}</h1>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
