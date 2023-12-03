import React from "react";
import "../assets/css/footer.css";
import logo2 from "../vendors/rick-and-morty-31043.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="container-fluid mt-4"
      style={{ backgroundColor: "#485c40" }}
    >
      <div className="row p-5">
        <div className="col-4 p-0 d-flex justify-content-center align-items-center">
          <img src={logo2} alt="" style={{ width: "10rem", height: "10rem" }} />
        </div>
        <div className="col-4 p-0  d-flex justify-content-center align-items-center footer">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item ">
              <NavLink className="text-decoration-none link-light" to="/">
                Home
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink
                className="text-decoration-none link-light"
                to="characters"
              >
                Characters
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink className="text-decoration-none link-light" to="contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-4 p-0 d-flex justify-content-center align-items-center">
          <p className="text-light">
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's
            nighttime programming block Adult Swim.
          </p>
        </div>
      </div>
    </div>
  );
}
