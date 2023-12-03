import React from "react";

import { NavLink } from "react-router-dom";

import { useFilterContext } from "../contexts/filter_context";

export default function CharacterList() {
  const { filtered_characters } = useFilterContext();

  return (
    <div className="col-9">
      <div className="row g-3">
        {filtered_characters.map((char) => (
          <div className="col-lg-3 col-md-4 col-6 " key={char.id}>
            <div className="card text-center" style={{ height: "35rem" }}>
              <img src={char.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong style={{ color: "#485c40" }}>Status :</strong>
                  {char.status}
                </li>
                <li className="list-group-item">
                  <strong style={{ color: "#485c40" }}>Species :</strong>
                  {char.species}
                </li>
                <li className="list-group-item">
                  <strong style={{ color: "#485c40" }}> Gender :</strong>
                  {char.gender}
                </li>
              </ul>
              <div className="card-body">
                <NavLink
                  className="text-decoration-none link-light btn btn-success stretched-link"
                  to={`/character/${char.id}`}
                >
                  More Deatails
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
