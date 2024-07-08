import { useEffect, useState } from "react";
import CostumCheckbox from "../Elements/CostumCheckbox";
import PriceRange from "./PriceRange";

const FilterOptions = () => {
  const [filters, setFilters] = useState({
    categories: [],
  });

  const fetchCategories = async () => {
    //FETCH SPECIFIC CATEGORIES AVAILABLE
    const categoryListUrl = "https://dummyjson.com/products/category-list";
    const response = await fetch(categoryListUrl); //GET ALL WOMEN CATEGORIES FROM LIST OF CATEGORIES
    if (!response.ok) {
      throw new Error("Couldn't fetch data");
    }
    const catArray = await response.json();

    const womenCategories = catArray.filter(
      (
        category //FILTER ONES THAT ARE RELATED TPO WOMENS
      ) => category.startsWith("womens-")
    );

    return womenCategories;
  };

  useEffect(() => {
    const getCat = async () => {
      const cat = await fetchCategories();
      setFilters(cat);
    };

    getCat();
  }, []);

  return (
    <>
      <div className="filter-section">
        <h1 className="filter-header">Filter Options</h1>
      </div>

      <div className="filter-section">
        <h1 className="filter-header">Category</h1>
        <ul className="filter-content">
          {Object.values(filters).map((cat, index) => {
            return (
              <li className="filter-item" key={index}>
                <CostumCheckbox label={cat} />
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
