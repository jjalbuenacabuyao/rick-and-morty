import React from "react";
import { Filter, Search, Showcase, Header, Pagination } from "../components";

const Box = ({
  title,
  page,
  setPage,
  apiData,
  filters,
  setFilters,
  setSearch,
  pageInfo
}) => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6 px-6 pt-28">
        <h1 className="text-center text-2xl font-bold text-sky-900 dark:text-sky-400">
          {title}
        </h1>
        <Search setSearch={setSearch} />

        <Filter filters={filters} setFilters={setFilters} />

        <Showcase apiData={apiData} filters={filters} />

        <Pagination page={page} setPage={setPage} pageInfo={pageInfo}/>
      </div>
    </>
  );
};

export default Box;
