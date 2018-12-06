import React from "react";
import Link from "react-router-dom/Link";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">WFHX Systems</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/userprofile">User Profile</Link>
          </li>
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/uploadimage">Upload Images</Link>
          </li>
          <li>
            <Link to="/view">View Images</Link>
          </li>
          <li>
            <Link to="/rental">Rental</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
