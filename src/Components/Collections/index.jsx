import Banner from "../Banner";
import FilterComponent from "./FilterComponent";
import ImageCard from "../Elements/ImageCard";
import exampleImg from "../../assets/images/cart/example-cloth.png";
const Collections = () => {
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
              <div className="flex justify-between mb-10">
                <div className="text-primary">Showing 1-12 of 240 results</div>
                <div className="text-primary">Sort by</div>
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
                      stroke-width="2.2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      stroke-width="2.2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
