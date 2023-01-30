import React, { useEffect, useState } from "react";
import {Header, Showcase, Filter} from "../components";

const Characters = () => {
  const [page, setPage] = useState(1)
  const [apiData, setApiData] = useState([])
  const [filters, setFilters] = useState({})
  const apiURL = `https://rickandmortyapi.com/api/character/?page=${page}`;
  
  useEffect(() => {
    (async function(){
      const response = await fetch(apiURL)
      const data = await response.json()
      setApiData(data)
    })()
  })

  return (
    <>
      <Header />
      <div>
        <h1>Characters</h1>

        <form>
          <input type="text" />
          <button>
            <span className="material-icons text-gray-900 dark:text-gray-50">search</span>
          </button>
        </form>

        <div>
          <Filter setFilters={setFilters} />
          <Showcase filters={filters} />
        </div>
      </div>
    </>
  );
};

export default Characters;
