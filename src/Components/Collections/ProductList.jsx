import ImageCard from "../Elements/ImageCard";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ProductList = ({ products, error, filters }) => {
  const { categories, priceRange } = filters;
  const { minVal, maxVal } = priceRange;

  const filteredProd = products.data.filter((product) => {
    // if (categories && !categories.includes(product.category)) {
    //   return false;
    // }

    // // Check if product price is within the specified range
    // if (!(product.price > minVal && product.price < maxVal)) {
    //   return false; // Exclude products outside price range
    // }

    let catMatches = true;
    let priceMatches = true;
    if (categories && categories.length > 0) {
      catMatches = categories.includes(product.category);
    }

    // Check if product price is within the specified range
    if (minVal !== undefined && maxVal !== undefined) {
      priceMatches = product.price > minVal && product.price < maxVal; // Exclude products outside price range
    }

    let bothMatched = catMatches && priceMatches;

    // let catt = catMatches || !priceMatches;

    // let tt = !catMatches || priceMatches;

    // console.log(catt);

    return bothMatched;

    //return true;
  });

  const initialProducts =
    filteredProd.length === 0 ? products.data : filteredProd;

  const [addToCard] = useOutletContext(); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP

  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {initialProducts.map((product, index) => (
        <ImageCard
          id={product.id}
          key={index}
          imgSrc={product.thumbnail}
          category={product.category}
          proName={product.title}
          lowPrice="34"
          price={product.price}
          classN="w-[100%] md:w-[31%]"
          addToCard={addToCard}
        />
      ))}
    </div>
  );
};

export default ProductList;
