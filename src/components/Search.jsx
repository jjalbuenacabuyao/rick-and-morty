import React from "react";

const Search = ({ filters, setFilters }) => {
  return (
    <form>
      <label htmlFor="search" className="relative block">
        <span className="sr-only">Search</span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="relative w-full rounded-full border-2 bg-transparent border-gray-500 dark:border-sky-400 py-2 px-4 text-sm focus:border-gray-900 focus:outline-none"
          autoComplete="off"
          onChange={(e) => {
            setFilters({ ...filters, name: e.target.value });
          }}
        />
        <span className="material-icons absolute right-4 top-0 bottom-0 my-auto aspect-square w-6 leading-none text-gray-600 dark:text-gray-200">
          search
        </span>
      </label>
    </form>
  );
};

export default Search;
