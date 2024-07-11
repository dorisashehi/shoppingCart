import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
  const [card, setCard] = useState([]); //CART STATE

  const addToCard = (newProd) => {
    //ADD ITEM TO CARD FROM CHILD COMPONENT
    // Check if the item with the same id already exists in the cart
    const index = card.findIndex((item) => item.id === newProd.id); //FIND INDEX OF THE PRODUCT IN CART

    if (index !== -1) {
      // If id exists, update the quantity
      const updatedCard = [...card];
      updatedCard[index].quantity += 1;
      setCard(updatedCard);
    } else {
      //NOT IN CARD ADD IT
      setCard([...card, newProd]);
    }
  };

  const removeFromCart = (updatedPro) => {
    const index = card.findIndex((item) => item.id === updatedPro.id); //FIND INDEX OF THE PRODUCT IN CART

    if (index !== -1) {
      //IF ITS PRESENT
      const updatedCart = [...card];
      updatedCart[index].quantity -= 1; //DISCOUNT QUANTITY BY 1

      if (updatedCart[index].quantity === 0) {
        //WHEN THE QUANTITY OF THE PRODUCT REACHES 0, REMOVE IT FROM CART
        updatedCart.splice(index, 1);
      }
      setCard(updatedCart);
    }
  };

  const findProdInCart = (proID) => {
    //GET PRODUCT INFO FOR A SPECIFIC PRODUCT PERESENT IN CART
    return products.data.find((item) => item.id === proID);
  };

  return (
    <CartContext.Provider value={{ card, addToCard, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
