import { useState } from "react";
import Banner from "../Banner";
import FilterComponent from "./FilterComponent";
import ImageCard from "../Elements/ImageCard";
import exampleImg from "../../assets/images/cart/example-cloth.png";
import Select from "react-tailwindcss-select";
const Collections = () => {
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
      <Banner title="Shop" path="Home / Collections" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10">
            <div className="w-[250px] pr-5 hidden lg:block">
              <FilterComponent />
            </div>

            <div className="flex-1">
              <div className="flex justify-between mb-7 md:mb-10 items-start mb:items-center flex-col md:flex-row">
                <div className="text-primary sort-text mb-5 lg:mb-0">
                  Showing 1-12 of 240 results
                </div>
                <div className="text-primary flex w-[300px] items-center">
                  <span className="flex-none mr-3 sort-text">Sort by</span>
                  <Select
                    primaryColor="var(--primary-color)"
                    value={sorted}
                    placeholder="Defult Sorting"
                    onChange={handleChange}
                    options={options}
                    classNames={{
                      menuButton: () =>
                        `flex sort-text cursor-pointer border-2 border border-borderColor rounded-[0.2em] outline-0 transition-all duration-300 focus:outline-0`,
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
              <div className="flex flex-wrap justify-between gap-y-10">
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[100%] md:w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[100%] md:w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[100%] md:w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[100%] md:w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[100%] md:w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[100%] md:w-[31%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
