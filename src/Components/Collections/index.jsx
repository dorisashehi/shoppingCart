import Banner from "../Banner";
import FilterOptions from "./FilterOptions";
import ProductList from "./ProductList";
import SortFilter from "./SortFilter";
import Sidebar from "../Elements/Sidebar";
import ActiveFilters from "./ActiveFilters";
const Collections = () => {
  return (
    <>
      <Banner title="Shop" path="Home / Collections" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10">
            <div className="w-[250px] pr-5 hidden lg:block">
              <FilterOptions />
            </div>

            <div className="flex-1">
              <SortFilter />

              <Sidebar>
                <FilterOptions />
                <svg
                  className="filter-icons ml-1 absolute top-15 right-10"
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
              </Sidebar>

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
