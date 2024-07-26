import Banner from "../Banner";
import Button from "../Elements/buttons";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductsContext } from "../../Context/ProductsContext";
import PlusMinus from "../Elements/PlusMinus";
import OrderSidebar from "../Elements/OrderSidebar";
import ClearLink from "../Elements/ClearLink";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { getProd } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const {
    card,
    deleteAddedPro,
    calculateRealPrice,
    addToCard,
    removeFromCart,
  } = useContext(CartContext);

  //ON CLICK TO PLUS ICON
  const addQuantity = (proID, quantity) => {
    //ADD QUANTITY FOR THE PRODUCT
    addToCard({
      id: proID,
      quantity: quantity + 1,
    });
  };

  //ON CLICK TO MINUS ICON
  const removeQuantity = (proID, quantity) => {
    //REMOVE QUANTITY - 1 FOR THE REMOVED PROD
    if (quantity - 1 === 0) {
      deleteAddedPro(proID);
      return;
    }
    removeFromCart(proID);
  };

  const navigate = useNavigate();

  return (
    <>
      <Banner title="Shopping Cart" path="Home / Cart" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10 flex-col lg:flex-row">
            {card.length > 0 ? (
              <>
                <div className="flex-1">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-primary cursor-pointer">
                      <thead className="text-[0.7rem] md:text-xs text-primary uppercase bg-yellow">
                        <tr>
                          <th></th>
                          <th
                            scope="col"
                            className="px-4 md:px-6 py-2 md:py-3 hidden md:table-cell"
                          >
                            Product
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-2 md:py-3">
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-4 md:px-6 py-2 md:py-3 hidden md:table-cell"
                          >
                            Price
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-2 md:py-3">
                            Quantity
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-2 md:py-3">
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {card.map((product) => {
                          let { title, thumbnail, price, discountPercentage } =
                            getProd(product.id); //DESTRUCTUR SOME INFO FROM ALL PRODUCT INFOS
                          let realPrice = discountPercentage
                            ? calculateRealPrice(price, discountPercentage)
                            : price;
                          return (
                            <tr
                              className="bg-white border-b border-borderColor text-primary"
                              key={product.id}
                            >
                              <td className="">
                                <svg
                                  className="filter-icons cursor-pointer"
                                  data-slot="icon"
                                  fill="none"
                                  strokeWidth="2.2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  onClick={() => deleteAddedPro(product.id)}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              </td>
                              <td className="hidden md:table-cell">
                                <img
                                  src={thumbnail}
                                  className="w-[100px] h-[100px] object-cover"
                                />
                              </td>
                              <td className="px-4 md:px-6 py-2 md:py-4">
                                {title}{" "}
                                <b className="md:hidden mt-4">${realPrice}</b>
                              </td>
                              <td className="px-4 md:px-6 py-2 md:py-4 hidden md:table-cell">
                                ${realPrice}
                              </td>
                              <td className="px-4 md:px-6 py-2 md:py-4">
                                <PlusMinus
                                  addQuantity={() =>
                                    addQuantity(product.id, product.quantity)
                                  }
                                  removeQuantity={() =>
                                    removeQuantity(product.id, product.quantity)
                                  }
                                  quantity={product.quantity}
                                />
                              </td>
                              <td className="px-4 md:px-6 py-2 md:py-4">
                                ${realPrice * product.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-full md:w-[350px] pr-5 lg:block border-2 border-borderColor px-7 py-5 h-fit">
                  <OrderSidebar>
                    <Button
                      classN="cart-btn justify-center text-[0.9rem] md:text-sm"
                      text="Proceed To Checkout"
                    ></Button>
                  </OrderSidebar>
                </div>
              </>
            ) : (
              <span className="flex gap-2">
                No items in card.{"  "}
                <ClearLink clickAction={() => navigate("/shop")}>
                  Shop now
                </ClearLink>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
