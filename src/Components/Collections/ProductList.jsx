import ImageCard from "../Elements/ImageCard";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useState } from "react";
const ProductList = ({ products, error }) => {
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {products.loading ? (
        <Spinner />
      ) : error !== "" ? (
        <div className="w-full">{error}</div>
      ) : (
        products.data.map((product, index) => (
          <ImageCard
            key={index}
            imgSrc={product.thumbnail}
            category={product.category}
            proName={product.title}
            lowPrice="34"
            price={product.price}
            classN="w-[100%] md:w-[31%]"
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
