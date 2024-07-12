import Banner from "../Banner";
import FilterOptions from "./FilterOptions";
import ProductList from "./ProductList";
import SortFilter from "./SortFilter";
import ActiveFilters from "./ActiveFilters";
import FilterBy from "./FilterBy";
import { useContext, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";

const Collections = () => {
  const [filters, setFilters] = useState({
    //FILTERS SELECTED
    categories: [],
    priceRange: {
      minVal: 0,
      maxVal: 1000,
    },
  });

  const contextData = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP

  return (
    <>
      <Banner title="Shop" path="Home / Collections" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10">
            <div className="w-[250px] pr-5 hidden lg:block">
              <FilterOptions
                selectedCategories={filters.categories}
                priceRange={filters.priceRange}
                setFilters={setFilters}
              />
            </div>

            <div className="flex-1">
              <SortFilter />

              <ActiveFilters
                categories={filters.categories}
                setFilters={setFilters}
              />

              <ProductList error={contextData.error} filters={filters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
