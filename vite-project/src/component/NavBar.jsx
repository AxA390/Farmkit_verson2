// NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        Dashboard
      </Link>
      <Link
        to="/product_des"
        className={location.pathname === "/product_des" ? "nav-link active" : "nav-link"}
      >
        Product Details
      </Link>
      <Link
        to="/profile"
        className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
      >
        User Details
      </Link>
      <Link
        to="/Login"
        className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}
      >
        Log out
      </Link>
    </nav>
  );
}

export default NavBar;
