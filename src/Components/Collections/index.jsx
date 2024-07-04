import Banner from "../Banner";
import FilterComponent from "./FilterComponent";
const Collections = () => {
  return (
    <>
      <Banner title="Shop" path="Home / Collections" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex">
            <div className="w-[300px]">
              <FilterComponent />
            </div>

            <div className="flex-1">right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
