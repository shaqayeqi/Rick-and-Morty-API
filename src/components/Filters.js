import React from "react";
import { useFilterContext } from "../contexts/filter_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filters() {
  const { updateFilters, clearFilters } = useFilterContext();
  return (
    <div className="col-3 ">
      <button
        className="btn btn-success d-lg-none  "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      >
        <FontAwesomeIcon icon="fa-solid fa-filter" />
      </button>

      <div
        className="offcanvas-lg offcanvas-start"
        tabindex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel ">
            Filters
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div class="card w-100">
            <div class="card-body">
              <h4 className="d-none d-lg-block">Filters</h4>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row mt-3">
                  <div className="col">
                    <h5 className="text-success">Status</h5>
                    <div
                      class="btn-group-vertical w-100"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <button
                        name="status"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Alive
                      </button>
                      <button
                        name="status"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Unknown
                      </button>
                      <button
                        name="status"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Dead
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5 className="text-success">Species</h5>
                    <div
                      class="btn-group-vertical w-100"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <button
                        name="species"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Human
                      </button>
                      <button
                        name="species"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Alien
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <h5 className="text-success">Gender</h5>
                    <div
                      class="btn-group-vertical w-100"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <button
                        name="gender"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Male
                      </button>
                      <button
                        name="gender"
                        type="button"
                        class="btn btn-outline-success text-dark"
                        onClick={updateFilters}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <button className="btn btn-success" onClick={clearFilters}>
                      Clear Filters
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
