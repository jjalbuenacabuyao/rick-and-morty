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
      <div className="flex flex-col gap-6 mx-36-140 mt-28 mb-8 lg:grid lg:grid-cols-[1fr_2fr]">
        <h1 className="text-center text-2xl font-bold text-sky-900 dark:text-sky-400 lg:col-span-2">
          {title}
        </h1>
        <Search setSearch={setSearch} setPage={setPage}/>

        <Filter filters={filters} setFilters={setFilters} />

        <Showcase apiData={apiData} filters={filters} />

        <Pagination page={page} setPage={setPage} pageInfo={pageInfo}/>
      </div>
    </>
  );
};

export default Box;
