import React from "react";
import logo1 from "../vendors/slider-rick.jpg";
import AliveCharacters from "../components/AliveCharacters";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" mt-5 container position-relative ">
        <div>
          <img
            src={logo1}
            className="d-block w-100 opacity-25"
            alt="..."
            style={{ height: "22rem" }}
          />
        </div>
        <h1 className="position-absolute top-50 start-0 translate-middle-y ms-5 fw-bold">
          Wellcome
        </h1>
        <h6 className="position-absolute top-50 start-0  ms-5 mt-5 fw-bold">
          Rick and Morty is an American adult animated science fiction sitcom.
        </h6>
        <div className="input-group mb-5 position-absolute bottom-0 start-0 input-group-sm  w-50 ms-5 rounded-pill">
          <input
            type="text"
            className="form-control"
            placeholder="Search for the character name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn text-light"
            style={{ backgroundColor: "#485c40" }}
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <AliveCharacters />
    </>
  );
}

export default Home;
