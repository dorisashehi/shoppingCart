import Banner from "../Banner";

const Order = () => {
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
        </div>
      </div>
    </>
  );
};

export default Order;
