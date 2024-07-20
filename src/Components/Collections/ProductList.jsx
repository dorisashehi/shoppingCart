import ImageCard from "../Elements/ImageCard";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import Spinner from "../Spinner";

const ProductList = ({ filters }) => {
  const { products, error } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { categories, priceRange } = filters;
  const { minVal, maxVal } = priceRange;

  const applyFilters = () => {
    let filteredProducts = products.data.filter((product) => {
      // Check if product's category is in selectedCategories
      let catMatch = true;
      let priceMatch = false;

      // Check if product's price is within the selected priceRange
      if (product.price > minVal && product.price < maxVal) {
        priceMatch = true;
      }
      if (categories.length > 0 && !categories.includes(product.category)) {
        catMatch = false;
      }
      return catMatch && priceMatch;
    });

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
