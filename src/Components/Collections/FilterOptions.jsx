import { useEffect, useState } from "react";
import CostumCheckbox from "../Elements/CostumCheckbox";
import PriceRange from "./PriceRange";

const FilterOptions = ({ categories, selectedCategories, setFilters }) => {
  const addCategory = (cat) => {
    //ADD CATEGORIES TO SELECTED CATEGORIES LIST

    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: [...prevFilters.categories, cat],
    }));
  };

  const removeCategory = (cat) => {
    //REMOVE CATEGORIE FROM SELECTED CATEGORIES LIST

    const updatedCat = selectedCategories.filter((item) => item !== cat);

    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: updatedCat,
    }));
  };

  const resetCategories = () => {
    //REMOVE ALL SELECTED CATEGORIES
    setSelectedCat([]);
  };

  const handleSelected = (e) => {
    //FNC TO AADD/REMOVE A CATEGORY SELECTED.

    if (selectedCategories.includes(e.target.value)) {
      removeCategory(e.target.value);
    } else {
      addCategory(e.target.value);
    }
  };

  // useEffect(() => {
  //   updateFilters(selectedCat);
  // }, [selectedCat]);

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
                <CostumCheckbox
                  label={cat}
                  handleSelected={handleSelected}
                  checked={selectedCategories.includes(cat) && true}
                />
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
