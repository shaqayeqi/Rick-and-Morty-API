import React from "react";

import { useEffect } from "react";
import Filters from "../components/Filters";
import CharacterList from "../components/CharacterList";

export default function Characters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-5 pt-5">
      <div className="row ">
        <Filters/>
        <CharacterList/>
      </div>
    </div>
  );
}
