import { useEffect, useState } from "react";
import CostumCheckbox from "../Elements/CostumCheckbox";
import PriceRange from "./PriceRange";

const FilterOptions = ({ categories, categoriesChck }) => {
  const [selectedCat, setSelectedCat] = useState([]);

  const handleSelected = (e) => {
    //FNC TO AADD/REMOVE A CATEGORY SELECTED.
    if (selectedCat.includes(e.target.value)) {
      const updatedCat = selectedCat.filter((item) => item !== e.target.value);
      setSelectedCat(updatedCat);
    } else {
      setSelectedCat([...selectedCat, e.target.value]);
    }
  };

  // const [prevSelectedCat] = useState(selectedCat);
  // if (prevSelectedCat !== selectedCat) {
  //   console.log(selectedCat);
  //   categoriesChck(selectedCat);
  // }

  // const [prevSelectedCat, setSidebarOpened] = useState(selectedCat);
  // if (prevSelectedCat !== selectedCat) {
  //   categoriesChck(selectedCat);
  // }

  useEffect(() => {
    console.log(selectedCat);
    categoriesChck(selectedCat);
  }, [selectedCat]);

  return (
    <>
      <div className="filter-section">
        <h1 className="filter-header">Filter Options</h1>
      </div>

      <div className="filter-section">
        <h1 className="filter-header">Category</h1>
        <ul className="filter-content">
          {categories.map((cat, index) => {
            return (
              <li className="filter-item" key={index}>
                <CostumCheckbox label={cat} handleSelected={handleSelected} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter-section">
        <h1 className="filter-header">Price</h1>
        <PriceRange />
      </div>
      {/* <div className="filter-section">
        <h1 className="filter-header">Size</h1>
        <ul className="filter-content">
          <li className="filter-item">
            <CostumCheckbox label="S" />
          </li>
          <li className="filter-item">
            <CostumCheckbox label="M" />
          </li>
          <li className="filter-item">
            <CostumCheckbox label="L" />
          </li>
          <li className="filter-item">
            <CostumCheckbox label="XL" />
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default FilterOptions;
