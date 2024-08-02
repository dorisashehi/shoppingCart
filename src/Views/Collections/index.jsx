import Banner from "../Banner";
import FilterOptions from "./FilterOptions";
import ProductList from "./ProductList";
import SortFilter from "./SortFilter";
import ActiveFilters from "./ActiveFilters";
import FilterBy from "./FilterBy";
const Collections = () => {
  return (
    <>
      <Banner title="Shop" path="Home / Collections" />
      <div className="full-screen">
        <div className="content">
          <div className="flex gap-10">
            <div className="w-[250px] pr-5 hidden lg:block">
              <FilterOptions />
            </div>

            <div className="flex-1">
              <FilterBy />
              <SortFilter />
              <ActiveFilters />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
