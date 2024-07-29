import { useContext, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import Banner from "../Banner";
import Button from "../Elements/buttons";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const OrderConfirmation = () => {
  const { getProd } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { card, clearCard, calculateRealPrice, findTotal, countCartItems } =
    useContext(CartContext);
  const { user, clearUserData } = useContext(UserContext);
  const [order, setOrder] = useState({
    id: "",
    userData: {},
    card: [],
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //HANDLE FORM SUBMIT
    event.preventDefault();

    const ord = {
      id: uuidv4(),
      userData: user,
      card: card,
    };
    setOrder(ord);
    clearUserData();
    clearCard();
    navigate("/ordered");
  };

  return (
    <>
      <Banner
        title="Order Confirmation"
        path="Home / Order / Order Confirmation"
      />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex-1 mt-20">
            <div className="py-10 px-8 border-2 border-borderColor">
              <div className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary border-b border-borderColor pb-2">
                Order Confirmation
              </div>
              <table className="w-full text-sm text-left text-primary cursor-pointer mt-3 pb-5 border-b border-borderColor">
                <thead className="text-[0.7rem] md:text-xs text-primary capitalize">
                  <tr className="">
                    <th
                      scope="col"
                      className="order-table-head text-base w-[10%]"
                    >
                      Products
                    </th>
                    <th scope="col" className="order-table-head w-[80%]"></th>
                    <th
                      scope="col"
                      className="order-table-head text-base w-[10%] text-end"
                    >
                      Sub Total
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
                      <tr className="bg-white text-primary" key={product.id}>
                        <td className="py-2">
                          <img
                            src={thumbnail}
                            className="w-[100px] h-[100px] object-cover bg-[#f5f5f5]"
                          />
                        </td>
                        <td className="font-epilogue flex flex-col font-semibold text-sm">
                          {title}{" "}
                          <div className="font-epilogue text-sm text-secondary pt-2 pb-5 font-medium ">
                            Price: ${realPrice}
                          </div>
                        </td>

                        <td className="font-epilogue text-end">
                          ${realPrice * product.quantity}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <ul className="filter-content mt-6">
                  <li className="flex justify-between mb-2 text-sm text-primary">
                    <span className="order-table-head">Items</span>
                    <span className="font-epilogue">{countCartItems}</span>
                  </li>
                  <li className="flex justify-between mb-2 text-sm text-primary">
                    <span className="order-table-head">Subtotal</span>
                    <span className="font-epilogue">${findTotal(getProd)}</span>
                  </li>
                  <li className="flex justify-between  mb-2 text-sm pb-2 text-primary">
                    <span className="order-table-head">Shipping</span>
                    <span className="font-epilogue">$00.00</span>
                  </li>
                  <li className="flex justify-between mb-2 text-sm border-t-2 border-borderColor py-2 text-primary">
                    <span className="order-table-head">Total</span>
                    <span className="font-epilogue">${findTotal(getProd)}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[200px] mt-10 float-right">
              <Button
                classN="cart-btn justify-center text-[0.9rem] md:text-sm"
                text="Confirm Order"
                clickAction={(event) => handleSubmit(event)}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
