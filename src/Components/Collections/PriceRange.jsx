import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
const PriceRange = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
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
        max={100}
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
      />
    </>
  );
};

export default PriceRange;
