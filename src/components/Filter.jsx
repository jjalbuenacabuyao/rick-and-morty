import React, { useState } from "react";

const Filter = ({ filters, setFilters }) => {
  const [collapse, setCollapse] = useState(false);
  const [statusSelected, setStatusSelected] = useState("none");
  const [genderSelected, setGenderSelected] = useState("none");
  const [speciesSelected, setSpeciesSelected] = useState("none");
  const filterTags = ["status", "gender", "species"];
  const choices = {
    status: ["alive", "dead", "unknown", "none"],
    gender: ["male", "female", "unknown", "genderless", "none"],
    species: [
      "human",
      "alien",
      "humanoid",
      "poopybutthole",
      "mythological",
      "unknown",
      "animal",
      "disease",
      "robot",
      "cronenberg",
      "planet",
      "none",
    ],
  };

  const fieldsets = filterTags.map((filter) => (
    // Map each items in the array and creates fieldset. Inside the fieldset is a paragraph containing and the generated labels from choices object.
    <fieldset
      key={filter}
      className="flex flex-wrap items-center gap-3 capitalize text-sm xl:text-base"
    >
      <p className="text-base font-bold leading-none">{filter}:</p>
      {
        //map every items in status
        filter === "status"
          ? choices.status.map((status) => (
              <label
                key={status}
                className={`${
                  statusSelected === status
                    ? "rounded-full bg-gray-800 text-sm text-gray-50 dark:bg-sky-500"
                    : ""
                } px-2 py-1`}
              >
                <span>{status}</span>
                <input
                  type="radio"
                  className="hidden"
                  name={filter}
                  value={status}
                  onChange={(e) => {
                    setStatusSelected(e.target.value);
                    status === "none"
                      ? setFilters({ ...filters, status: "" })
                      : setFilters({ ...filters, status: e.target.value });
                  }}
                />
              </label>
            ))
          : //map every items in gender
          filter === "gender"
          ? choices.gender.map((gender) => (
              <label
                key={gender}
                className={`${
                  genderSelected === gender
                    ? "rounded-full bg-gray-800 text-sm text-gray-50 dark:bg-sky-500"
                    : ""
                } px-2 py-1`}
              >
                <span>{gender}</span>
                <input
                  type="radio"
                  className="hidden"
                  name={filter}
                  value={gender}
                  onChange={(e) => {
                    setGenderSelected(e.target.value);
                    gender === "none"
                      ? setFilters({ ...filters, gender: "" })
                      : setFilters({ ...filters, gender: e.target.value });
                  }}
                />
              </label>
            ))
          : //map every items in species
            choices.species.map((species) => (
              <label
                key={species}
                className={`${
                  speciesSelected === species
                    ? "rounded-full bg-gray-800 text-sm text-gray-50 dark:bg-sky-500"
                    : ""
                } px-2 py-1`}
              >
                <span>{species}</span>
                <input
                  type="radio"
                  className="hidden"
                  name={filter}
                  value={species}
                  onChange={(e) => {
                    setSpeciesSelected(e.target.value);
                    species === "none"
                      ? setFilters({ ...filters, species: "" })
                      : setFilters({ ...filters, species: e.target.value });
                  }}
                />
              </label>
            ))
      }
    </fieldset>
  ));

  return (
    <div>
      {/* Toggle Button */}
      <button
        aria-expanded={collapse}
        onClick={() => {
          if (window.innerWidth >= 1024) {
            return;
          } else {
            setCollapse(!collapse);
          }
        }}
        className="flex items-center justify-between gap-2 px-3 py-1 lg:px-0"
      >
        <span className="text-sm leading-none">Filters</span>
        <span className="material-icons-outlined lg:hidden">
          {collapse ? `arrow_drop_up` : `arrow_drop_down`}
        </span>
      </button>

      {/* Filters */}
      <form
        className={`overflow-hidden ${
          collapse
            ? "opacity-animation h-auto rounded-lg border-[1px] border-gray-400 p-4"
            : "h-0"
        } mt-2 flex flex-col gap-5 bg-gray-100 dark:bg-gray-500 lg:h-auto lg:animate-none lg:rounded-lg lg:border-[1px] lg:border-gray-400 lg:p-4 lg:dark:bg-transparent xl:gap-7`}
      >
        {fieldsets}
      </form>
    </div>
  );
};

export default Filter;
