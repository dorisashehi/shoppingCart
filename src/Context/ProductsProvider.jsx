import { ProductsContext } from "./ProductsContext";
import { useEffect, useState } from "react";
const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setDefaultCategories] = useState([]); //ALL CATEGORIES
  const fetchCategories = async () => {
    //FETCH SPECIFIC CATEGORIES AVAILABLE
    const categoryListUrl = "https://dummyjson.com/products/category-list";
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

    return womenCategories;
  };

  useEffect(() => {
    //ON RENDERER GET ALL CATEGORIES
    fetchCategories().then((data) => setDefaultCategories(data));
  }, []);

  const [products, setProducts] = useState({
    //PRODUCTS FILTERED BASED ON CATEGORIES
    data: [],
    errorMsg: "",
  });

  const [error, setErrorMsg] = useState(""); //STATE TO HANDLE ERROR MESSAGES

  const getUrl = (cat) => {
    //GET URL FOR A SPECIFIC CATEGORY
    const categoryProducts = "https://dummyjson.com/products/category/" + cat;
    return categoryProducts;
  };
  const fetchUrlData = async (url) => {
    //FETCH DATA FROM THE API AND SHOW / HIDE LOADING SPINNER.
    try {
      const response = await fetch(url); //FETCH DATA FOR A SPECIFIC URL
      if (!response.ok) {
        throw new Error("Couldn't fetch data");
      }
      const data = await response.json();
      return data.products; //RETURN ONLY PRODUCTS FROM DATA TAKEN ([Array(5), Array(5), Array(3), Array(5), Array(5)])
    } catch (error) {
      throw error;
    }
  };

  const fetchAllData = async () => {
    try {
      const allData = await Promise.all(
        //RETURN RESULT WHEN DATA FETCHED FROM ALL CATEGORIES
        categories.map((cat) => fetchUrlData(getUrl(cat)))
      );
      return allData.flat(); //RETURN AN ARRAY OF OBJ NOT ARRAY OF ARRAYS
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    //START HERE
    if (categories.length > 0) {
      fetchAllData() //GET ALL TYPE OF PRODUCTS RELATED TO A CATEGORY
        .then((products) => {
          setProducts({
            //SET PRODCUTS TO THE STATE
            data: products, //AN ARRAY WITH PRODUCTS OBJECTS
          });
          setLoading(false);
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    }
  }, [categories]); //EXECUTED ONLY ON CATEGORIES OR FILTERS CHANGE

  const getProd = (proID) => {
    //GET PRODUCT INFO FOR A SPECIFIC PRODUCT PERESENT IN CART
    return products.data.find((item) => item.id === proID);
  };

  const prodInWishlist = (proID) => {
    //GET PRODUCT INFO FOR A SPECIFIC PRODUCT PERESENT IN CART
    return products.data.find((item) => item.id === proID);
  };

  return (
    <ProductsContext.Provider
      value={{
        categories,
        products,
        error,
        getProd,
        prodInWishlist,
        setProducts,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
