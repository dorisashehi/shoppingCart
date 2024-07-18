import Banner from "../Banner";
import Button from "../Elements/buttons";
import InputItem from "../Elements/InputItem";
const Checkout = () => {
  return (
    <>
      <Banner title="Checkout" path="Home / Shopping Card / Checkout" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10 flex-col lg:flex-row  max-w-5xl">
            <div className="flex-1">
              <h1 className="font-epilogue text-[1.7rem] font-medium mt-3 mb-9">
                Shipping Address
              </h1>
              <form className="w-full max-w-xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <InputItem
                      label="First Name"
                      placeholder="Ex. John"
                      errorMsg=" Please fill out this field."
                      id="shipping-first-name"
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <InputItem
                      label="Last Name"
                      placeholder="Ex. Doe"
                      id="shipping-last-name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Company Name (Optional)"
                      placeholder="Ex. Company 1"
                      id="shipping-company"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Country"
                      placeholder="Enter Country"
                      id="shipping-country"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Street Address"
                      placeholder="Enter Street Address"
                      id="shipping-street"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="City"
                      placeholder="Enter City"
                      id="shipping-city"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="State"
                      placeholder="Enter State"
                      id="shipping-state"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Zip Code"
                      placeholder="Enter Zip"
                      id="shipping-zip"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Phone"
                      placeholder="Enter Phone"
                      id="shipping-phone"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Email"
                      placeholder="Enter Email Address"
                      id="shipping-emai"
                      type="text"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full md:w-[350px] pr-5 lg:block border-2 border-borderColor px-7 py-5 h-fit mt-[80px]">
              <div className="border-b-2 border-borderColor pb-3 font-medium">
                <h1 className="">Cart</h1>
              </div>
              <ul className="filter-content mt-6">
                <li className="flex justify-between mb-2 text-sm">
                  <span>Items</span>
                  <span className="text-primary font-medium"></span>
                </li>
                <li className="flex justify-between mb-2 text-sm">
                  <span>Subtotal</span>
                  <span className="text-primary font-medium"></span>
                </li>
                <li className="flex justify-between  mb-2 text-sm">
                  <span>Shipping</span>
                  <span className="text-primary font-medium">$00.00</span>
                </li>
              </ul>
              <div className=" w-[100%] bg-white mt-3">
                <Button
                  classN="cart-btn justify-center text-[0.9rem] md:text-sm"
                  text="Continue Payment"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
