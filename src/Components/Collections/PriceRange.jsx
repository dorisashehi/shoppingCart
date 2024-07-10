import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
const PriceRange = ({ setFilters, initialRange }) => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleChangePrice = () => {
    if (minValue !== initialRange.minVal || maxValue !== initialRange.maxVal) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: { minVal: minValue, maxVal: maxValue },
      }));
    }
  };

  return (
    <>
      <div className="filter-content mb-5 filter-item">
        ${minValue}.00 - ${maxValue}.00
      </div>

      <MultiRangeSlider
        className="price-slider"
        style={{
          border: "none",
          boxShadow: "none",
          padding: "15px 10px",
        }}
        min={0}
        max={1000}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        barLeftColor="var(--border-color)"
        barRightColor="var(--border-color)"
        barInnerColor="var(--primary-color)"
        thumbLeftColor="var(--primary-color)"
        thumbRightColor="var(--primary-color)"
        ruler="false"
        label="false"
        onInput={(e) => {
          handleInput(e);
        }}
        onChange={handleChangePrice}
      />
    </>
  );
};

export default PriceRange;
