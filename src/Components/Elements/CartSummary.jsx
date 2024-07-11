import { Link } from "react-router-dom";
import Button from "../Elements/buttons";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductsContext } from "../../Context/ProductsContext";
const CartSummary = () => {
  //CART SUMMARY SHOWN IN SIDEBAR

  const { prodInCart } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { card, deleteAddedPro, findTotal } = useContext(CartContext);

  return (
    <div>
      <div className="cart-section">
        <h1 className="cart-header">Cart</h1>
      </div>

      <div className="flex flex-col h-[500px] md:h-[800px] lg:h-[500px] overflow-y-auto">
        {card.map((product) => {
          let { id, title, thumbnail, price } = prodInCart(product.id); //DESTRUCTUR SOME INFO FROM ALL PRODUCT INFOS

          return (
            <div className="flex gap-x-5 cart-section mb-5" key={product.id}>
              <img
                className="w-[100px] h-[100px] object-cover"
                src={thumbnail}
              />
              <div className="flex flex-col relative flex-1">
                <svg
                  className="cart-icons ml-1 absolute top-0 right-0 cursor-pointer text-secondary"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  onClick={() => deleteAddedPro(product.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></path>
                </svg>
                <h3 className="cart-header">{title}</h3>
                <span className="cart-item font-epilogue">Price: ${price}</span>
                <span className="cart-item font-epilogue">
                  Quantity: {product.quantity}
                </span>
                <span className="cart-item font-epilogue">
                  <b>Total:</b> ${price * product.quantity}
                </span>
              </div>
            </div>
          );
        })}

        <span className="cart-header">
          Order Total: $ {findTotal(prodInCart)}
        </span>
      </div>

      <div className="absolute bottom-0 w-[100%] pr-[20px] bg-white pb-10 pt-5 md:pt-4 xl:pb-6 lg:pb-40">
        <Button
          classN="cart-btn justify-center text-[0.9rem] md:text-[1rem] mb-5"
          text="Checkout"
        ></Button>
        <div className="underline cursor-pointer sort-text md:self-end text-center">
          <Link to="/cart">View Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
