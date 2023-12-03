import React from "react";
import logo from "../vendors/rick-and-morty-31043.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg   fixed-top"
        style={{ backgroundColor: "#485c40", height: "5rem" }}
      >
        <div className="container">
          <Link to="/">
            <img
              src={logo}
              alt="rick and morty logo"
              className="navbar-brand p-0"
              style={{ width: "5rem", height: "5rem" }}
            />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              style={{ color: "#fff" }}
            />
          </button>
          <div
            style={{ backgroundColor: "#485c40" }}
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav pe-3">
                <li className="nav-item">
                  <NavLink
                    className="link-underline-opacity-0 px-2 link-light"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <hr className="d-lg-none text-light" />
                </li>
                <li className="nav-item">
                  <NavLink
                    className="link-underline-opacity-0 px-2 link-light"
                    to="characters"
                  >
                    Characters
                  </NavLink>
                </li>
                <hr className="d-lg-none text-light" />
                <li className="nav-item">
                  <NavLink
                    className="link-underline-opacity-0 px-2 link-light"
                    to="contactus"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav
        className="navbar navbar-expand-lg fixed-top p-0  "
        style={{ backgroundColor: "#485c40", height: "4rem" }}
      >
        <div className="container  ">
          <Link to="/">
            <img
              src={logo}
              alt="rick and morty logo"
              className="navbar-brand "
              style={{ width: "5rem", height: "5rem" }}
            />
          </Link>

          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink
                className="link-underline-opacity-0 px-2 link-light"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="link-underline-opacity-0 px-2 link-light"
                to="character"
              >
                Characters
              </NavLink>
              <NavLink
                className="link-underline-opacity-0 px-2 link-light"
                to="contact"
              >
                Conect Us
              </NavLink>
            </div>
          </div>
          <NavLink className="link-underline-opacity-0 px-2 link-light">
            Login
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
    </>
  );
}

export default Navbar;
