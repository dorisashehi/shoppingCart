import Select from "react-tailwindcss-select";
import { useState } from "react";
const SortFilter = () => {
  const options = [
    { value: "Asc", label: "Ascending" },
    { value: "Desc", label: "Descending" },
  ];
  const [sorted, setSorted] = useState(null);

  const handleChange = (value) => {
    console.log("value:", value);
    setSorted(value);
  };
  return (
    <>
      <div className="flex justify-between mb-3 md:mb-10 items-start mb:items-center flex-col md:flex-row">
        <div className="text-primary sort-text mb-5 lg:mb-0 hidden lg:block">
          Showing 1-12 of 240 results
        </div>
        <div className="text-primary flex w-[300px] items-center">
          <span className="flex-none mr-3 sort-text hidden md:block">
            Sort by
          </span>
          <Select
            primaryColor="var(--primary-color)"
            value={sorted}
            placeholder="Defult Sorting"
            onChange={handleChange}
            options={options}
            classNames={{
              menuButton: () =>
                `flex  py-0 py-0 text-[0.8rem] text-primary opacity-[0.8] w-[150px] cursor-pointer border-2 border border-borderColor rounded-[0.2em] outline-0 transition-all duration-300 focus:outline-0`,
              menu: "absolute z-10 w-full bg-white shadow-sm font-normal border-2 border border-borderColor rounded-[0.2em] py-1 mt-1.5 text-sm text-primary cursor-pointer",
              listItem: ({ isSelected }) =>
                `block transition duration-200 sort-text px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-primary`
                    : `text-primary hover:bg-yellow opacity-[0.8]`
                }`,
            }}
          />
        </div>
      </div>

      <div className="mobile-filter lg:hidden">
        <svg
          className="filter-icons cursor-pointer"
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          ></path>
        </svg>
        <span className="ml-1">Filter By</span>
      </div>
    </>
  );
};

export default SortFilter;
