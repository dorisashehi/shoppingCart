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

  const getUrl = (cat) => {
    //GET URL FOR A SPECIFIC CATEGORY
    const categoryProducts = "https://dummyjson.com/products/category/" + cat;
    return categoryProducts;
  };
  const fetchData = async (url) => {
    //FETCH DATA FROM THE API AND SHOW / HIDE LOADING SPINNER.
    try {
      const response = await fetch(url); //FETCH DATA FOR A SPECIFIC URL
      if (!response.ok) {
        throw new Error("Couldn't fetch data");
      }
      const data = await response.json();
      return data.products; //RETURN ONLY PRODUCTS FROM DATA TAKEN
    } catch (error) {
      throw error;
    }
  };

  const fetchAllData = async () => {
    const categoryListUrl = "https://dummyjson.com/products/category-list";
    try {
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

      const allData = await Promise.all(
        //RETURN RESULT WHEN DATA FETCHED FROM ALL CATEGORIES
        womenCategories.map((cat) => fetchData(getUrl(cat)))
      );
      return allData;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      fetchAllData() //GET ALL TYPE OF PRODUCTS RELATED TO A CATEGORY
        .then((data) => {
          const allProducts = [].concat(...data); //CONCAT THEM INTO ONE ARRAY
          setTimeout(() => {
            setProducts({
              //SET PRODCUTS TO THE STATE AFTER A SMALL DELAY OF LOADING
              loading: false,
              data: allProducts,
            });
          }, 1000);
        })
        .catch((error) => {
          setProducts({
            ...products,
            loading: false,
            errorMsg: error.message,
          });
          console.log(error.message);
        });
    };

    getProducts(); //START HERE
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {products.loading ? (
        <Spinner />
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

      <div className="w-full">{products.errorMsg}</div>
    </div>
  );
};

export default ProductList;
