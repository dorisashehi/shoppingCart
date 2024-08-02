import MultiRangeSlider from "multi-range-slider-react";
import { FilterContext } from "../../Context/FilterContext";
import { ProductsContext } from "../../Context/ProductsContext";
import { useState } from "react";
import { useContext } from "react";
const PriceRange = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const { setLoading } = useContext(ProductsContext);
  const initialRange = filters.priceRange;

  const [minValue, set_minValue] = useState(initialRange.minVal);
  const [maxValue, set_maxValue] = useState(initialRange.maxVal);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const handleChangePrice = () => {
    if (minValue !== initialRange.minVal || maxValue !== initialRange.maxVal) {
      setLoading(true);
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
