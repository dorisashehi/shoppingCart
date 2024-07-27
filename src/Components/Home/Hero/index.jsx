import bannerRight from "../../../assets/images/banner/banner-right.png";
import Button from "../../Elements/buttons";

const Hero = () => {
  return (
    <div className="mt-[82px] md:min-h-[420px] lg:min-h-[500px] bg-sectionColor w-full">
      <div className="content justify-center flex flex-col md:flex-row gap-[30px] md:gap-3">
        <div className="flex-1 md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="pt-[60px] lg:pt-0 w-[300px] lg:w-[590px] text-center md:text-left">
            <h1 className="font-epilogue font-medium text-[25px] lg:text-[41px] leading-[37px] lg:leading-[58px]">
              Step into Style: Your Ultimate Fashion Destination
            </h1>
            <div className="sub-header text-secondary text-xs md:text-base mt-5">
              Lorem ipsum dolor s amet,consectetur adipiscing elit, sed do
              eiusmod tempor incididunt labore et dolore.
            </div>
            <div className="flex mt-[20px] md:mt-[50px] flex-row justify-center md:justify-start">
              <Button src="/shop" text="Shop Now">
                <svg
                  className="menu-icon ml-2 transform hover:translate-x-1 transition ease-out duration-300"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 flex">
          <img
            src={bannerRight}
            className="h-[240px] md:h-[425px] lg:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
