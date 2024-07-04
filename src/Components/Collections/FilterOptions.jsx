import CostumCheckbox from "../Elements/CostumCheckbox";
import PriceRange from "./PriceRange";
const FilterOptions = () => {
  return (
    <>
      <div className="filter-section">
        <h1 className="filter-header">Filter Options</h1>
      </div>

      <div className="filter-section">
        <h1 className="filter-header">Category</h1>
        <ul className="filter-content">
          <li className="filter-item">
            <CostumCheckbox label="Man" />
          </li>
          <li className="filter-item">
            <CostumCheckbox label="Women" />
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h1 className="filter-header">Price</h1>
        <PriceRange />
      </div>
      <div className="filter-section">
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
      </div>
    </>
  );
};

export default FilterOptions;
