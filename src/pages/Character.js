import React, { useEffect } from "react";
import { useCharactersContext } from "../contexts/AliveCharContext";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Character() {
  const { id } = useParams();
  const {
    singel_character,
    singel_character_loading,
    singel_character_error,
    fetchSingelCharacter,
  } = useCharactersContext();

  useEffect(() => {
    fetchSingelCharacter(`https://rickandmortyapi.com/api/character/${id}`);
  }, [id]);
if (singel_character_loading) {
  return <Loading />;
}
if (singel_character_error) {
  return <Error />;
}
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 ">
          <div className="card mb-3 border-0 ">
            <div className="row g-0 ">
              <div className="col-lg-2 col-md-3 col-6 ">
                <img
                  src={singel_character.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-lg-10 col-md-9">
                <div className="card-body ms-lg-5">
                  <h5 className="card-title">
                    <strong>Name :</strong>
                    {singel_character.name}
                  </h5>
                  <p className="card-text">
                    <strong>status :</strong>
                    {singel_character.status}
                  </p>
                  <p className="card-text">
                    {" "}
                    <strong>species :</strong>
                    {singel_character.species}
                  </p>
                  <p className="card-text">
                    <strong>gender :</strong>
                    {singel_character.gender}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {singel_character.created}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
