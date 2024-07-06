import ImageCard from "../Elements/ImageCard";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useState } from "react";
const ProductList = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: [],
  });
  useEffect(() => {
    async function fetchData() {
      //FETCH DATA FROM THE API AND SHOW / HIDE LOADING SPINNER.
      const response = await fetch(
        "https://dummyjson.com/products/category/womens-dresses"
      );
      const data = await response.json();

      setTimeout(() => {
        setProducts({
          loading: false,
          data: data.products,
        });
      }, 1000);
    }

    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {products.loading ? (
        <Spinner />
      ) : (
        Array.from(products.data).map((product, index) => (
          <ImageCard
            id={index}
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
