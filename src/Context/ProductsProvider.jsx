import { ProductsContext } from "./ProductsContext";
import { useEffect, useState } from "react";
const ProductsProvider = ({ children }) => {
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
    loading: true,
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
      return data.products; //RETURN ONLY PRODUCTS FROM DATA TAKEN
    } catch (error) {
      throw error;
    }
  };

  const fetchAllData = async () => {
    try {
      //const categories = await fetchCategories();

      const allData = await Promise.all(
        //RETURN RESULT WHEN DATA FETCHED FROM ALL CATEGORIES
        categories.map((cat) => fetchUrlData(getUrl(cat)))
      );
      return allData;
    } catch (error) {
      throw error;
    }
  };

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
        }, 200);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  useEffect(() => {
    //IF FILTERS DATA CHANGED
    getProducts(); //START HERE
  }, [categories]); //EXECUTED ONLY ON CATEGORIES OR FILTERS CHANGE

  return (
    <ProductsContext.Provider value={{ categories, products, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
