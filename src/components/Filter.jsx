import React, { useState } from "react";

const Filter = ({ filters, setFilters }) => {
  const [collapse, setCollapse] = useState(false);
  const [statusSelected, setStatusSelected] = useState("unset");
  const [genderSelected, setGenderSelected] = useState("unset");
  const [speciesSelected, setSpeciesSelected] = useState("unset");
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
    // Map each items in the array and creates fieldset. Inside the fieldset is a paragraph containing and the generated labels from choices object.
    <fieldset key={filter} className="flex gap-3 flex-wrap capitalize items-center">
      <p className="text-lg font-bold leading-none">{filter}:</p>
      {filter === "status"
        ? choices.status.map((status) => (
            <label
              key={status}
              className={`${
                statusSelected === status ? "text-gray-50 bg-gray-800 rounded-full text-sm" : ""
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
                genderSelected === gender ? "text-gray-50 bg-gray-800 rounded-full text-sm" : ""
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
                speciesSelected === species ? "text-gray-50 bg-gray-800 rounded-full text-sm" : ""
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
                  species === "unset"
                    ? setFilters({ ...filters, species: "" })
                    : setFilters({ ...filters, species: e.target.value });
                }}
              />
            </label>
          ))}
    </fieldset>
  ));

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        aria-expanded={collapse}
        onClick={() => setCollapse(!collapse)}
      className={`flex items-center justify-between gap-2 rounded-md  border-gray-900 px-3 py-1 ${collapse ? "border-2" : "border-[1px]"}`}
      >
        <span className="text-sm leading-none">Filters</span>
        <span className="material-icons-outlined">
          {collapse ? `keyboard_arrow_up` : `keyboard_arrow_down`}
        </span>
      </button>

      {/* Filters */}
      <form className={`overflow-hidden ${collapse ? "h-auto opacity-animation rounded-lg p-2 border-gray-400 border-[1px]" : "h-0"} bg-gray-100 flex flex-col gap-5 absolute top-10 right-0 left-0 z-10`}>{fieldsets}</form>
    </div>
  );
};

export default Filter;
