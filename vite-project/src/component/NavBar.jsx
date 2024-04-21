// NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link
        to="/"
        className={location.pathname === "/" ? "active" : ""}
      >
        Dashboard
      </Link>
      <Link
        to="/product_des"
        className={location.pathname === "/product_des" ? "active" : ""}
      >
        Product Details
      </Link>
      <Link
        to="/profile"
        className={location.pathname === "/profile" ? "active" : ""}
      >
        User Details
      </Link>
      <Link
        to="/Login"
        className={location.pathname === "/Login" ? "active" : ""}
      >
        Log out
      </Link>
    </div>
  );
}

export default NavBar;
