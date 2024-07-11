import { CartContext } from "./CartContext";
import { useState } from "react";
const CartProvider = ({ children }) => {
  const [card, setCard] = useState([]); //CART STATE

  const addToCard = (newProd) => {
    //ADD ITEM TO CARD FROM CHILD COMPONENT
    // Check if the item with the same id already exists in the cart
    const index = card.findIndex((item) => item.id === newProd.id);

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

  return (
    <CartContext.Provider value={{ card, addToCard }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
