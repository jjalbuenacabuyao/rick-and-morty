import React from "react";

const Pagination = ({ page, setPage, pageInfo }) => {
  const btnClasses = "bg-gray-800 p-[2px] leading-none text-gray-50 dark:bg-gray-500 dark:text-gray-50 rounded-md"

  let backButtonDisabled = page == 1 ? true : false;
  let forwardButtonDisabled = page == pageInfo.pages ? true : false;

  return (
    <div className="flex gap-5 justify-center items-center">
      <button
        onClick={() => setPage(page - 1)}
        className={`${btnClasses} ${backButtonDisabled ? "bg-gray-500 dark:bg-gray-800" : ""}`}
        disabled={backButtonDisabled}
      >
        <span className="material-icons">keyboard_arrow_left</span>
      </button>
      <p>
        <label htmlFor="page-number">
          Page{" "}
          <input
            type="number"
            name="number"
            id="page-number"
            value={page}
            min={1}
            max={pageInfo.pages}
            onChange={(e) => setPage(e.target.value)}
            className={`${pageInfo.pages > 9 ? "w-7" : "w-6"} pl-[6px] rounded-md bg-transparent border-[1px] border-sky-400`}
          />{" "}
          of {pageInfo.pages}
        </label>
      </p>
      <button 
        onClick={() => setPage(page + 1)}
        className={`${btnClasses} ${forwardButtonDisabled ? "bg-gray-500 dark:bg-gray-800" : ""}`}
        disabled={forwardButtonDisabled}
      >
        <span className="material-icons">keyboard_arrow_right</span>
      </button>
    </div>
  );
};

export default Pagination;
