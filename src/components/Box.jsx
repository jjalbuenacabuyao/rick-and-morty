import React from 'react'
import {Filter, Search, Showcase, Header} from "../components"

const Box = ({title, setPage, apiData, filters, setFilters}) => {
  return (
    <>
      <Header />
      <div className="px-6 pt-28 flex flex-col gap-10">
        <h1 className="text-center text-2xl font-bold text-sky-900 dark:text-sky-400">{title}</h1>
        <Search filters={filters} setFilters={setFilters}/>

        <div>
          <Filter setFilters={setFilters} />
          <Showcase apiData={apiData} />
        </div>
      </div>
    </>
    
  )
}

export default Box