import { FilterContext } from "./FilterContext";
import { useState } from "react";

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    //FILTERS SELECTED
    categories: [],
    priceRange: {
      minVal: 0,
      maxVal: 1000,
    },
    sort: "",
  });

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
