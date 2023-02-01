import React, { useState } from "react";

const Filter = ({ filters, setFilters }) => {
  const [collapse, setCollapse] = useState(false);
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
      "unset"
    ],
  };

  const fieldsets = filterTags.map((filter) => (
    // Map each items in the array and create a fieldset. Inside the fieldset is a paragraph containing and the generated labels from choices object.
    <fieldset>
      <p>{filter}</p>
      {filter === "status"
        ? choices.status.map((status) => (
            <label>
              <span>{status}</span>
              <input type="radio" name={filter} value={status} />
            </label>
          ))
        : filter === "gender"
        ? choices.gender.map((gender) => (
            <label>
              <span>{gender}</span>
              <input type="radio" name={filter} value={gender} />
            </label>
          ))
        : choices.species.map((species) => (
            <label>
              <span>{species}</span>
              <input type="radio" name={filter} value={species} />
            </label>
          ))}
    </fieldset>
  ));

  return (
    <div>
      {/* Toggle Button */}
      <button
        aria-expanded={collapse}
        onClick={() => setCollapse(!collapse)}
        className="flex w-full items-center justify-between"
      >
        <span className="leading-none">Filters</span>
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
