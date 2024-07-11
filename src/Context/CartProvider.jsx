import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
  const [card, setCard] = useState([]); //CART STATE

  const findPro = (proID) => {
    return card.findIndex((item) => item.id === proID); //FIND INDEX OF THE PRODUCT IN CART
  };

  const addToCard = (newProd) => {
    // Check if the item with the same id already exists in the cart
    const index = findPro(newProd.id); //FIND INDEX OF THE PRODUCT IN CART

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

  const removeFromCart = (updatedProID) => {
    const index = findPro(updatedProID);
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

  const deleteAddedPro = (proID) => {
    //DELETE PROJECT FROM CART SIDEBAR

    const index = findPro(proID);

    //IF ITS PRESENT
    const updatedCart = [...card];
    //DELETE PRODUCT FROM CART
    updatedCart.splice(index, 1);

    setCard(updatedCart);
  };

  const findTotal = (findProdInCart) => {
    //CALCULATE TOTAL TO PAY
    const total = card.reduce((total, curr) => {
      return total + curr.quantity * findProdInCart(curr.id).price;
    }, 0);

    return Number.parseFloat(total).toFixed(2);
  };

  const countCartItems = () => {
    //COUNT CART LENGTH
    const total = card.reduce((total, curr) => {
      return total + curr.quantity;
    }, 0);

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        card,
        addToCard,
        removeFromCart,
        deleteAddedPro,
        findTotal,
        countCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
