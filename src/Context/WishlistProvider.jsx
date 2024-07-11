import { useState } from "react";
import { WishlistContext } from "./WishlistContext";

const WishlistProvider = ({ children }) => {
  const [wishlisted, setWishlisted] = useState([]);

  const findPro = (proID) => {
    return wishlisted.findIndex((item) => item.id === proID); //FIND INDEX OF THE PRODUCT IN Wishlist
  };

  const toggleWishlist = (newProd) => {
    const index = findPro(newProd.id); //FIND INDEX OF THE PRODUCT IN wishlist
    if (index === -1) {
      setWishlisted([...wishlisted, newProd]);
    } else {
      //IF ITS PRESENT
      const updatedWishlisted = [...wishlisted];
      updatedWishlisted.splice(index, 1);
      setWishlisted(updatedWishlisted);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
