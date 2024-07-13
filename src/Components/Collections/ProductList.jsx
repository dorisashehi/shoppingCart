import ImageCard from "../Elements/ImageCard";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import Spinner from "../Spinner";

const ProductList = ({ filters }) => {
  // const { categories, priceRange, error } = filters;
  // const { minVal, maxVal } = priceRange;
  // const filteredProd = products.data.filter((product) => {
  //   // if (categories && !categories.includes(product.category)) {
  //   //   return false;
  //   // }

  //   // // Check if product price is within the specified range
  //   // if (!(product.price > minVal && product.price < maxVal)) {
  //   //   return false; // Exclude products outside price range
  //   // }

  //   let catMatches = true;
  //   let priceMatches = true;
  //   if (categories && categories.length > 0) {
  //     catMatches = categories.includes(product.category);
  //   }

  //   // Check if product price is within the specified range
  //   if (minVal !== undefined && maxVal !== undefined) {
  //     priceMatches = product.price > minVal && product.price < maxVal; // Exclude products outside price range
  //   }

  //   let bothMatched = catMatches && priceMatches;

  //   // let catt = catMatches || !priceMatches;

  //   // let tt = !catMatches || priceMatches;

  //   // console.log(catt);

  //   return bothMatched;

  //   //return true;
  // });

  // const initialProducts =
  //   filteredProd.length === 0 ? products.data : filteredProd;

  let { wishlisted } = useContext(WishlistContext); //GET WISHLIST FROM CONTEXT

  const isWishlisted = (id) => {
    const index = wishlisted.find((item) => item.id === id);
    if (index) {
      return true;
    }
    return false;
  };

  const { products, error } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { isInCard } = useContext(CartContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP

  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      {products.loading ? (
        <Spinner />
      ) : error !== "" ? (
        <div className="w-full">{error}</div>
      ) : (
        products.data.map((product, index) => (
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
