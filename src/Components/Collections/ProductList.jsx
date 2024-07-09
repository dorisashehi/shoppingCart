import ImageCard from "../Elements/ImageCard";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useState } from "react";
const ProductList = ({ products, error, filters }) => {
  const categories = [...filters.categories];

  const filteredProd = products.data.filter((product) => {
    // console.log(categories.includes(product.category));
    if (categories && categories.includes(product.category)) {
      return true;
    }
    return true;
  });

  console.log(filteredProd);

  // console.log(filteredProd);

  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {filteredProd.map((product, index) => (
        <ImageCard
          key={index}
          imgSrc={product.thumbnail}
          category={product.category}
          proName={product.title}
          lowPrice="34"
          price={product.price}
          classN="w-[100%] md:w-[31%]"
        />
      ))}
    </div>
  );
};

export default ProductList;
