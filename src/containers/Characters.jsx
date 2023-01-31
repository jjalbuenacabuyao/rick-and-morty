import React, { useEffect, useState } from "react";
import { Box } from "../components";

const Characters = () => {
  const sectionTitle = "Characters";
  let [page, setPage] = useState(1);
  let [apiData, setApiData] = useState([]);
  let [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });
  let apiURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${filters.name}&status=${filters.status}&species=${filters.species}&gender=${filters.gender}`;

  useEffect(() => {
    (async function () {
      let response = await fetch(apiURL).then((res) => res.json());
      let {info, results} = response;
      setApiData(results);
    })();
  }, [apiURL]);


  return (
    <Box
      title={sectionTitle}
      setPage={setPage}
      apiData={apiData}
      setFilters={setFilters}
      filters={filters}
    />
  );
};

export default Characters;
