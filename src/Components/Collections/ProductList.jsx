import ImageCard from "../Elements/ImageCard";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useState } from "react";
const ProductList = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: [],
    errorMsg: "",
  });

  const fetchData = async () => {
    //FETCH DATA FROM THE API AND SHOW / HIDE LOADING SPINNER.
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/womens-dresses"
      );

      if (response.ok) {
        const result = await response.json();

        return result;
      } else {
        throw new Error("Couldn't fetch data");
      }
    } catch (error) {
      setProducts({
        ...products,
        loading: false,
        errorMsg: error,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchData();
      setTimeout(() => {
        setProducts({
          loading: false,
          data: data.products,
        });
      }, 1000);
    };

    getProducts();
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {products.loading ? (
        <Spinner />
      ) : (
        Object.values(products.data).map((product, index) => (
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

      {/* <div>{products.errorMsg}</div> */}
    </div>
  );
};

export default ProductList;
