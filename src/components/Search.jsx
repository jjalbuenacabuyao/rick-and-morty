import React from "react";

const Search = ({ setFilters }) => {
  return (
    <form>
      <label htmlFor="search" className="block relative">
        <span className="sr-only">Search</span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="relative w-full rounded-full border-2 text-sm border-gray-500 py-2 px-4 focus:outline-none focus:border-gray-900"
          autoComplete="off"
          onChange={(e) => {setFilters(e.target.value)}}
        />
        <span className="material-icons w-6 aspect-square absolute right-4 top-0 bottom-0 my-auto leading-none text-gray-600">
          search
        </span>
      </label>
    </form>
  );
};

export default Search;
