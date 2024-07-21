import { useMemo, useReducer, useState } from "react";
import { WishlistContext } from "./WishlistContext";

const WishlistProvider = ({ children }) => {
  //const [wishlisted, setWishlisted] = useState([]);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const findPro = (proID, wishlistArr) => {
    return wishlistArr.findIndex((item) => item.id === proID); //FIND INDEX OF THE PRODUCT IN Wishlist
  };

  const initialWishlist = [];

  const reducer = (wishlisted, action) => {
    if (action.type === "toggle") {
      const index = findPro(action.newProd.id, wishlisted); //FIND INDEX OF THE PRODUCT IN wishlist
      if (index === -1) {
        return [...wishlisted, action.newProd];
      } else {
        //IF ITS PRESENT
        const updatedWishlisted = [...wishlisted];
        updatedWishlisted.splice(index, 1);
        return updatedWishlisted;
      }
    }
    if (action.type === "delete") {
      //DELETE PROJECT FROM WISHLIST SIDEBAR

      const index = findPro(action.proID, wishlisted);

      //IF ITS PRESENT
      const updatedWishlist = [...wishlisted];
      //DELETE PRODUCT FROM CART
      updatedWishlist.splice(index, 1);
      return updatedWishlist;
    }

    return wishlisted;
  };

  const [wishlisted, dispatch] = useReducer(reducer, initialWishlist);

  const toggleWishlist = (newProd) => {
    setWishlistLoading(true);
    dispatch({ type: "toggle", newProd: newProd });
  };

  const deleteAddedPro = (proID) => {
    //DELETE PROJECT FROM WISHLIST SIDEBAR
    setWishlistLoading(true);
    dispatch({ type: "delete", proID: proID });
  };

  const isWishlisted = (id) => {
    const product = wishlisted.find((item) => item.id === id);
    return product ? true : false;
  };

  const countWishlistItems = useMemo(() => {
    //COUNT Wishlist LENGTH
    return wishlisted.length;
  }, [wishlisted]);

  return (
    <WishlistContext.Provider
      value={{
        wishlisted,
        toggleWishlist,
        countWishlistItems,
        deleteAddedPro,
        isWishlisted,
        setWishlistLoading,
        wishlistLoading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
