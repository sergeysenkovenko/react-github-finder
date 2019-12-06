import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="container navbar">
        <Link to="/">
          <h2>
            <i className="fa fa-github" style={{ marginRight: "0.5rem" }}></i>
            Github Finder
          </h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
