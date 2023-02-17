import React, { useEffect, useState } from "react";
import { Header, Search } from "../components";

const Episodes = () => {
  let [page, setPage] = useState(1);
  let [apiData, setApiData] = useState([]);
  let [search, setSearch] = useState("");
  let apiURL = `https://rickandmortyapi.com/api/episode/?name=${search}`;
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    (async function () {
      let response = await fetch(apiURL).then((res) => res.json());
      let { info, results } = response;
      setApiData(results);
      setPageInfo(info);
    })();
  }, [apiURL]);

  let episodeCard = apiData.map((episode) => (
    <div
      key={episode.id}
      className="rounded-lg border-[1px] border-gray-600 p-3 text-xs dark:border-gray-500"
    >
      <h2 className="text-lg">{episode.name}</h2>
      <p>{episode.episode}</p>
      <p>{episode.air_date}</p>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="mx-36-140 mt-28 mb-12 flex flex-col gap-6 md:mb-16 lg:mt-36 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-10 lg:gap-x-5">
        <h1 className="text-center text-2xl font-bold text-sky-900 dark:text-sky-400 md:text-3xl lg:col-span-2 lg:text-4xl">
          Episodes
        </h1>
        <Search setSearch={search} setPage={setPage} />
        {episodeCard}
      </main>
    </>
  );
};

export default Episodes;
