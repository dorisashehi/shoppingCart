import { useContext, useState } from "react";
import { FilterContext } from "../../Context/FilterContext";
import { ProductsContext } from "../../Context/ProductsContext";
import ClearLink from "../../Components/ClearLink";
const ActiveFilters = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const { setLoading } = useContext(ProductsContext);
  const categories = filters.categories;
  const resetFilters = () => {
    setLoading(true);
    setFilters((prevFilters) => ({ ...prevFilters, categories: [] }));
  };

  const handleDelete = (cat) => {
    const updatedCat = filters.categories.filter((item) => item !== cat);

    setLoading(true);
    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: updatedCat,
    }));
  };

  return (
    <div className="flex gap-5 items-start md:items-center mb-10 flex-col md:flex-row">
      {categories.length > 0 && (
        <h1 className="text-primary sort-text">Active Filters</h1>
      )}
      <div className="flex gap-5 items-center md:items-start flex-wrap">
        {categories.map((cat, index) => (
          <div className="selected-filter" key={index}>
            {cat}
            <svg
              className="filter-icons ml-1"
              data-slot="icon"
              fill="none"
              strokeWidth="2.2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              onClick={() => handleDelete(cat)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        ))}
        {categories.length !== 0 && (
          <ClearLink clickAction={() => resetFilters()}>Clear All</ClearLink>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;
