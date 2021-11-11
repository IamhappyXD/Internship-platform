import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  //   state = { clicked: false };
  //   handleClick = () => {
  //     this.setState({ clicked: !this.state.clicked });
  //     console.log(this.state);
  //   };
  const history = useNavigate();

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Internbee</h1>
      {/* <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div> 
        <ul ... => {this.state.clicked ? "nav-menu active" : "nav-menu"}/
        */}
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="nav-links">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-links">
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/internships" className="nav-links">
            Internships
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">
            About Us
          </Link>
        </li>
      </ul>
      <Button onClick={() => history("/sign-up")}>Sign Up</Button>
    </nav>
  );
}

export default Navbar;

// TRY TO IMPLEMENT history more logically, understand the concept!
