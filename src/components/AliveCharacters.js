import React from "react";
import { useCharactersContext } from "../contexts/AliveCharContext";
import "../assets/css/aliveChar.css"
import { NavLink } from "react-router-dom";

export default function AliveCharacters() {
  const { alive_characters } = useCharactersContext();

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h5 className="ms-lg-5 fw-bold text-center text-lg-start">
              Alive Characters
            </h5>
          </div>
        </div>
        <hr
          style={{ borderColor: "#485c40", borderWidth: "2px", opacity: "0.5" }}
        />
      </div>

      <div className="container mt-3 alive_char">
        <div className="row justify-content-center">
          {alive_characters.map((char) => (
            <div
              className=" col-md-1 p-0 d-flex justify-content-center ms-1 mb-1"
              key={char.id}
              style={{ width: "10rem" }}
            >
              <div className="card ">
                <img
                  src={char.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "10rem", width: "10rem" }}
                />
                <div className="card-body text-center fw-bold">
                  <NavLink
                    to={`character/${char.id}`}
                    className="card-title  stretched-link text-decoration-none"
                  >
                    {char.name}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-success">
              <NavLink
                to="characters"
                className="text-decoration-none link-light"
              >
                Veiw All
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
