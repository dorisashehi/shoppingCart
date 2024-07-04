const ActiveFilters = () => {
  return (
    <div className="flex gap-5 items-start md:items-center mb-10 flex-col md:flex-row">
      <h1 className="text-primary sort-text">Active Filters</h1>
      <div className="flex gap-5 items-center md:items-start flex-wrap">
        <div className="selected-filter">
          Women
          <svg
            className="filter-icons ml-1"
            data-slot="icon"
            fill="none"
            strokeWidth="2.2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="selected-filter">
          Women
          <svg
            className="filter-icons ml-1"
            data-slot="icon"
            fill="none"
            strokeWidth="2.2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="selected-filter">
          Women
          <svg
            className="filter-icons ml-1"
            data-slot="icon"
            fill="none"
            strokeWidth="2.2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="selected-filter">
          Men
          <svg
            className="filter-icons ml-1"
            data-slot="icon"
            fill="none"
            strokeWidth="2.2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="underline cursor-pointer sort-text md:self-end">
          Clear All
        </div>
      </div>
    </div>
  );
};

export default ActiveFilters;
