import { FilterContext } from "./FilterContext";
import { useState } from "react";

const FilterProvider = ({ children }) => {
  // const tt = () => {
  //   const mmin = products.data.map((item) => {
  //     return item.price;
  //   });
  //   console.log(Math.max(...mmin));
  //   //set_maxValue(Math.max(...mmin));
  //   return Math.max(...mmin);
  // };

  const [filters, setFilters] = useState({
    //FILTERS SELECTED
    categories: [],
    priceRange: {
      minVal: 0,
      maxVal: 10000,
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
