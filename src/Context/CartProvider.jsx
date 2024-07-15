import { CartContext } from "./CartContext";
import { useReducer, useState, useMemo } from "react";

const CartProvider = ({ children }) => {
  //const [card, setCard] = useState([]); //CART STATE

  const initialCard = [];

  const findPro = (proID, cardItems) => {
    return cardItems.findIndex((item) => item.id === proID); //FIND INDEX OF THE PRODUCT IN CART
  };

  const reducer = (card, action) => {
    if (action.type === "increment") {
      // Check if the item with the same id already exists in the cart
      const index = findPro(action.payload.id, card); //FIND INDEX OF THE PRODUCT IN CART

      if (index !== -1) {
        // If id exists, update the quantity
        const updatedCard = [
          ...card.slice(0, index),
          { ...card[index], quantity: card[index].quantity + 1 },
          ...card.slice(index + 1),
        ];

        return updatedCard;
      } else {
        //NOT IN CARD ADD IT
        return [...card, action.payload];
      }
    }

    if (action.type === "remove") {
      const index = findPro(action.payload, card);
      if (index !== -1) {
        //IF ITS PRESENT
        let updatedCard = [...card.slice(0, index), ...card.slice(index + 1)];
        updatedCard = [
          ...card.slice(0, index),
          { ...card[index], quantity: card[index].quantity - 1 }, //DISCOUNT QUANTITY BY 1
          ...card.slice(index + 1),
        ];

        return updatedCard;
      }
    }

    if (action.type === "deleteAdded") {
      //DELETE PROJECT FROM CART SIDEBAR

      const index = findPro(action.payload, card);

      //IF ITS PRESENT
      const updatedCart = [...card];
      //DELETE PRODUCT FROM CART
      updatedCart.splice(index, 1);

      return updatedCart;
    }
    return card; //NOT TYPE, JUST RETURN ITS INITIAL VALUE
  };
  const [card, dispatch] = useReducer(reducer, initialCard);

  const addToCard = (newProd) => {
    dispatch({ type: "increment", payload: newProd });
  };

  const removeFromCart = (updatedProID) => {
    dispatch({ type: "remove", payload: updatedProID });
  };

  const deleteAddedPro = (proID) => {
    //DELETE PROJECT FROM CART SIDEBAR
    dispatch({ type: "deleteAdded", payload: proID });
  };

  const calculateRealPrice = (price, percentage) => {
    //CALCULATE REAL PRICE AFTER DISCOUNT
    const discountPrice = (percentage / 100) * price;
    const realPrice = price - discountPrice;
    return Number.parseFloat(realPrice).toFixed(2);
  };

  const findTotal = (findProdInCart) => {
    //CALCULATE TOTAL TO PAY
    const total = card.reduce((total, curr) => {
      const product = findProdInCart(curr.id);

      if (product.discountPercentage) {
        //PRODUCT HAS DISCOUNT
        return (
          total +
          curr.quantity *
            calculateRealPrice(product.price, product.discountPercentage)
        );
      }

      return total + curr.quantity * product.price; //PRODUCT HASN'T DISCOUNT
    }, 0);
    return Number.parseFloat(total).toFixed(2);
  };

  const countCartItems = useMemo(() => {
    //COUNT CART LENGTH
    const total = card.reduce((total, curr) => {
      return total + curr.quantity;
    }, 0);

    return total;
  }, [card]);

  const isInCard = (id) => {
    //FIND PROD QUANTITY IN CARD
    const product = card?.find((item) => item.id === id);
    return product?.quantity || 0;
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
        calculateRealPrice,
        isInCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
