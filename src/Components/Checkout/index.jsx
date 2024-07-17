import Banner from "../Banner";
import Button from "../Elements/buttons";
const Checkout = () => {
  return (
    <>
      <Banner title="Checkout" path="Home / Shopping Card / Checkout" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="flex-1">
              <h1 className="font-epilogue text-[1.7rem] font-medium mt-3 mb-9">
                Shipping Address
              </h1>
              <form className="w-full max-w-2xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="shipping-first-name"
                      type="text"
                      placeholder="Ex. John"
                    />
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-last-name"
                      type="text"
                      placeholder="Ex. Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-password"
                    >
                      Company Name (Optional)
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-password"
                      type="text"
                      placeholder="Ex. Company 1"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-country"
                    >
                      Country
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-country"
                      type="text"
                      placeholder="Enter Country"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-street"
                    >
                      Street Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="sshipping-street"
                      type="text"
                      placeholder="Enter Street Address"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-city"
                    >
                      City
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-city"
                      type="text"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-state"
                    >
                      State
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-state"
                      type="text"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-zip"
                    >
                      Zip Code
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-zip"
                      type="text"
                      placeholder="Enter Zip"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-phone"
                    >
                      Phone
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-phone"
                      type="text"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                      for="shipping-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-primary border border-borderColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="shipping-emai;"
                      type="text"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full md:w-[350px] pr-5 lg:block border-2 border-borderColor px-7 py-5 h-fit">
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
