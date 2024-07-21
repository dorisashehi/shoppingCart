import ImageCard from "../Elements/ImageCard";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import Spinner from "../Spinner";

const ProductList = ({ filters }) => {
  const { products, error } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { categories, priceRange, sort } = filters;
  const { minVal, maxVal } = priceRange;

  function compareValues(key, order = "Asc") {
    //FUNCTION TO SORT PRODUCTS
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "Desc" ? comparison * -1 : comparison;
    };
  }

  const applyFilters = () => {
    let filteredProducts = products.data.filter((product) => {
      // Check if product's category is in selectedCategories

      let catMatch = true; //BY DEFAULT CATEGORY MATCH
      let priceMatch = false; //BY DEFAULT CATEGORY DOESN'T MATCH

      // Check if product's price is within the selected priceRange
      if (product.price > minVal && product.price < maxVal) {
        priceMatch = true;
      }
      if (categories.length > 0 && !categories.includes(product.category)) {
        //CHECK IF CATEGORY INCLUDES PRODUCT CATEGORY
        catMatch = false;
      }
      return catMatch && priceMatch;
    });

    if (sort && sort.value === "asc-price") {
      //IF ASCENDING SORT
      filteredProducts = filteredProducts.sort(compareValues("price", "Asc"));
    }

    if (sort && sort.value === "desc-price") {
      //IF DESCENDING SORT
      filteredProducts = filteredProducts.sort(compareValues("price", "Desc"));
    }

    if (sort && sort.value === "asc-az") {
      //IF ASCENDING SORT
      filteredProducts = filteredProducts.sort(compareValues("title", "Asc"));
    }

    if (sort && sort.value === "desc-za") {
      //IF DESCENDING SORT
      filteredProducts = filteredProducts.sort(compareValues("title", "Desc"));
    }

    return filteredProducts;
  };

  const initialProducts = applyFilters();

  let { isWishlisted } = useContext(WishlistContext); //GET WISHLIST FROM CONTEXT
  const { isInCard } = useContext(CartContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP

  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {products.loading ? (
        <Spinner />
      ) : error !== "" ? (
        <div className="w-full">{error}</div>
      ) : (
        initialProducts.map((product, index) => (
          <ImageCard
            id={product.id}
            key={index}
            imgSrc={product.thumbnail}
            category={product.category}
            discountPercentage={product.discountPercentage}
            proName={product.title}
            price={product.price}
            classN="w-[100%] md:w-[31%]"
            wishlisted={isWishlisted(product.id)}
            inCard={isInCard(product.id)}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
