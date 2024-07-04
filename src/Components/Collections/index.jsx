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
            <div className="w-[250px] pr-5">
              <FilterComponent />
            </div>

            <div className="flex-1">
              <div className="flex justify-between mb-10 items-center">
                <div className="text-primary">Showing 1-12 of 240 results</div>
                <div className="text-primary flex w-[300px] items-center">
                  <span className="flex-none mr-3">Sort by</span>
                  <Select
                    primaryColor="var(--primary-color)"
                    value={sorted}
                    placeholder="Defult Sorting"
                    onChange={handleChange}
                    options={options}
                    classNames={{
                      menuButton: () =>
                        `flex text-sm cursor-pointer border-2 border border-borderColor rounded-[0.2em] outline-0 transition-all duration-300 focus:outline-0`,
                      menu: "absolute z-10 w-full bg-white shadow-sm font-normal border-2 border border-borderColor rounded-[0.2em] py-1 mt-1.5 text-sm text-primary cursor-pointer",
                      listItem: ({ isSelected }) =>
                        `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                          isSelected
                            ? `text-primary`
                            : `text-primary hover:bg-yellow opacity-[0.8]`
                        }`,
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-5 items-center mb-10">
                <h1 className="text-primary">Active Filters</h1>
                <div className="flex gap-5 items-center">
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
                  <div className="underline cursor-pointer">Clear All</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-y-10">
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[31%]"
                />
                <ImageCard
                  imgSrc={exampleImg}
                  category="Couts"
                  proName="Trendy brown Coust"
                  lowPrice="34"
                  price="56"
                  classN="w-[31%]"
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
