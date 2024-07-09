import Banner from "../Banner";
import FilterOptions from "./FilterOptions";
import ProductList from "./ProductList";
import SortFilter from "./SortFilter";
import ActiveFilters from "./ActiveFilters";
import FilterBy from "./FilterBy";
import { useEffect, useState } from "react";

const Collections = () => {
  const [categories, setDefaultCategories] = useState([]); //ALL CATEGORIES

  const [filters, setFilters] = useState({
    //FILTERS SELECTED
    categories: [],
  });

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
          // setFilteredProducts({
          //   //SET PRODCUTS TO THE STATE AFTER A SMALL DELAY OF LOADING
          //   loading: false,
          //   data: allProducts,
          // });
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

  // const updateFilters = (filteredProd) => {
  //   //FUNC to update filters
  //   setFilters({ ...filters, categories: filteredProd });
  // };

  return (
    <>
      <Banner title="Shop" path="Home / Collections" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10">
            <div className="w-[250px] pr-5 hidden lg:block">
              <FilterOptions
                categories={categories}
                selectedCategories={filters.categories}
                setFilters={setFilters}
              />
            </div>

            <div className="flex-1">
              <SortFilter />

              <ActiveFilters />
              <ProductList
                products={products}
                error={error}
                filters={filters}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
