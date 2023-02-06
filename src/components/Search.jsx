import React from "react";

const Search = ({ setSearch, setPage }) => {
  function handleSubmit(e){
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="search" className="relative block w-[80%] mx-auto">
        <span className="sr-only">Search</span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="relative w-full rounded-full border-2 border-gray-500 bg-transparent py-2 px-4 text-sm focus:border-gray-900 focus:outline-none dark:border-sky-400"
          autoComplete="off"
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <span className="material-icons absolute right-4 top-0 bottom-0 my-auto aspect-square w-6 leading-none text-gray-600 dark:text-gray-200">
          search
        </span>
      </label> */}
      <div className="relative block w-[80%] mx-auto">
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name="search"
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full rounded-full border-2 border-gray-500 bg-transparent py-2 px-4 text-sm focus:border-gray-900 focus:outline-none dark:border-sky-400"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Search;
