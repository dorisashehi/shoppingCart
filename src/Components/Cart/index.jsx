import Banner from "../Banner";
import exampleImg from "../../assets/images/cart/example-cloth.png";
import Button from "../Elements/buttons";
const Cart = () => {
  return (
    <>
      <Banner title="Shopping Cart" path="Home / Cart" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="flex-1">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-primary cursor-pointer">
                  <thead class="text-xs text-primary uppercase bg-yellow">
                    <tr>
                      <th></th>
                      <th scope="col" className="px-6 py-3 hidden md:block">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3  hidden md:block">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3  hidden md:block">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b border-borderColor text-primary">
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
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </td>
                      <td className="hidden md:block">
                        <img
                          src={exampleImg}
                          className="w-[100px] h-[100px] object-cover"
                        />
                      </td>
                      <td class="px-6 py-4">Hat</td>
                      <td class="px-6 py-4 hidden md:block">$56</td>
                      <td class="px-6 py-4 hidden md:block">2</td>
                      <td class="px-6 py-4">$294</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[350px] pr-5 lg:block border-2 border-borderColor px-7 py-5 h-fit">
              <div className="border-b-2 border-borderColor pb-3 font-medium">
                <h1 className="">Cart</h1>
              </div>
              <ul className="filter-content mt-6">
                <li className="flex justify-between mb-2 text-sm">
                  <span>Items</span>
                  <span className="text-primary font-medium">8</span>
                </li>
                <li className="flex justify-between mb-2 text-sm">
                  <span>Subtotal</span>
                  <span className="text-primary font-medium">$454</span>
                </li>
                <li className="flex justify-between  mb-2 text-sm">
                  <span>Shipping</span>
                  <span className="text-primary font-medium">$00.00</span>
                </li>
              </ul>
              <div className=" w-[100%] bg-white pb-10 pt-5 xl:pb-6 lg:pb-40">
                <Button
                  classN="cart-btn justify-center text-[0.9rem] md:text-sm"
                  text="Proceed To Checkout"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
