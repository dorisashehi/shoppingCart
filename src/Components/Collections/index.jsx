import Banner from "../Banner";
import FilterOptions from "./FilterOptions";
import ProductList from "./ProductList";
import SortFilter from "./SortFilter";
import Sidebar from "../Elements/Sidebar";
import ActiveFilters from "./ActiveFilters";
import { useState } from "react";

const Collections = () => {
  const [sidebarState, setSidebar] = useState(false);
  const handleOpenSidebar = () => {
    //OPEN / CLOSE SIDEBAR
    setSidebar(!sidebarState);
  };
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

              <div
                className="mobile-filter lg:hidden"
                onClick={handleOpenSidebar}
              >
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

              <Sidebar sidebarState={sidebarState}>
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
                  onClick={handleOpenSidebar}
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
