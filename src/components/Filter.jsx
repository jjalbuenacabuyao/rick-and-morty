import React, { useState } from "react";

const Filter = ({ filters, setFilters }) => {
  const [collapse, setCollapse] = useState(false);
  const [statusSelected, setStatusSelected] = useState("");
  const [genderSelected, setGenderSelected] = useState("");
  const [speciesSelected, setSpeciesSelected] = useState("");
  const filterTags = ["status", "gender", "species"];
  const choices = {
    status: ["alive", "dead", "unknown", "unset"],
    gender: ["male", "female", "unknown", "unset"],
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
      "unset",
    ],
  };

  const fieldsets = filterTags.map((filter) => (
    // Map each items in the array and create a fieldset. Inside the fieldset is a paragraph containing and the generated labels from choices object.
    <fieldset key={filter}>
      <p>{filter}</p>
      {filter === "status"
        ? choices.status.map((status) => (
            <label
              key={status}
              className={`${
                statusSelected === status ? "border-[1px] border-gray-900" : ""
              }`}
            >
              <span>{status}</span>
              <input
                type="radio"
                className="hidden"
                name={filter}
                value={status}
                onChange={(e) => {
                  setStatusSelected(e.target.value);
                  status === "unset"
                    ? setFilters({ ...filters, status: "" })
                    : setFilters({ ...filters, status: e.target.value });
                }}
              />
            </label>
          ))
        : filter === "gender"
        ? choices.gender.map((gender) => (
            <label
              key={gender}
              className={`${
                genderSelected === gender ? "border-[1px] border-gray-900" : ""
              }`}
            >
              <span>{gender}</span>
              <input
                type="radio"
                className="hidden"
                name={filter}
                value={gender}
                onChange={(e) => {
                  setGenderSelected(e.target.value);
                  gender === "unset"
                    ? setFilters({ ...filters, gender: "" })
                    : setFilters({ ...filters, gender: e.target.value });
                }}
              />
            </label>
          ))
        : choices.species.map((species) => (
            <label
              key={species}
              className={`${
                speciesSelected === species ? "border-[1px] border-gray-900" : ""
              }`}
            >
              <span>{species}</span>
              <input
                type="radio"
                className="hidden"
                name={filter}
                value={species}
                onChange={(e) => {
                  setSpeciesSelected(e.target.value);
                  species === "unset"
                    ? setFilters({ ...filters, species: "" })
                    : setFilters({ ...filters, species: e.target.value });
                }}
              />
            </label>
          ))}
    </fieldset>
  ));

  console.log(filters);

  return (
    <div>
      {/* Toggle Button */}
      <button
        aria-expanded={collapse}
        onClick={() => setCollapse(!collapse)}
        className="flex items-center justify-between gap-2 rounded-md border-[1px] border-gray-900 px-3"
      >
        <span className="text-sm leading-none">Filters</span>
        <span className="material-icons-outlined">
          {collapse ? `keyboard_arrow_up` : `keyboard_arrow_down`}
        </span>
      </button>

      {/* Filters */}
      <form>{fieldsets}</form>
    </div>
  );
};

export default Filter;
