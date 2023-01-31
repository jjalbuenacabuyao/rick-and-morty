import React, { useEffect, useState } from "react";
import { Box } from "../components";

const Characters = () => {
  const sectionTitle = "Characters"
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });
  const apiURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${filters.name}&status=${filters.status}&species=${filters.species}&gender=${filters.gender}`;

  useEffect(() => {
    (async function () {
      const response = await fetch(apiURL);
      const data = await response.json();
      setApiData(data);
    })();
  });

  return (
    <Box 
      title={sectionTitle}
      setPage={setPage}
      apiData={apiData}
      setFilters={setFilters}
    />
  );
};

export default Characters;
