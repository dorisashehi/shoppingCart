import Banner from "../Banner";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductsContext } from "../../Context/ProductsContext";
const Order = () => {
  const { getProd } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { card, calculateRealPrice, findTotal, countCartItems } =
    useContext(CartContext);
  return (
    <>
      <Banner title="Order Completed" path="Home / Order Completed" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex-1 flex flex-col justify-center items-center">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="2.2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-[60px] bg-yellow p-[13px] rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>

            <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary pt-8">
              Your order is completed!
            </h5>
            <div className="font-inter text-sm text-secondary pt-2 pb-5 font-medium ">
              Thank you. Your order has been received.
            </div>
          </div>
          <div className="flex-1">
            <div className="py-10 px-8 border-2 border-borderColor">
              <div className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary border-b border-borderColor pb-2">
                Order Details
              </div>
              <table className="w-full text-sm text-left text-primary cursor-pointer mt-3 pb-5 border-b border-borderColor">
                <thead className="text-[0.7rem] md:text-xs text-primary capitalize">
                  <tr className="">
                    <th scope="col" className="order-table-head text-sm">
                      Products
                    </th>
                    <th scope="col" className="order-table-head w-[100%]"></th>
                    <th scope="col" className="order-table-head text-sm">
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
                        <td className="table-head flex flex-col">
                          {title}{" "}
                          <div className="font-inter text-sm text-secondary pt-2 pb-5 font-medium ">
                            Price: ${realPrice}
                          </div>
                        </td>

                        <td className="table-item">
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
                    <span>{countCartItems}</span>
                  </li>
                  <li className="flex justify-between mb-2 text-sm text-primary">
                    <span className="order-table-head">Subtotal</span>
                    <span>${findTotal(getProd)}</span>
                  </li>
                  <li className="flex justify-between  mb-2 text-sm pb-2 text-primary">
                    <span className="order-table-head">Shipping</span>
                    <span>$00.00</span>
                  </li>
                  <li className="flex justify-between mb-2 text-sm border-t-2 border-borderColor py-2 text-primary">
                    <span className="order-table-head">Total</span>
                    <span>${findTotal(getProd)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
