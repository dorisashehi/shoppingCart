import logoBottom from "../../assets/images/logo-bottom.png";
import Logo from "../Elements/Logo";

const Footer = () => {
  return (
    <div className="w-full pt-20 pb-5 bg-brown">
      <div className="content flex flex-col md:flex-row gap-5 border-b-2 border-[#6a4c39] pb-5">
        <div className="flex flex-col flex-1 md:w-1/2 max-w-[400px] md:max-w-[300px] items-center md:items-start text-center md:text-left lg:text-left lg:items-start">
          <Logo logoImg={logoBottom} />

          <div className="text-paragraph font-inter list-item w-[70%]">
            Lorem ipum dolor s amet consecttur adipiscing itsddo eiusmod opor
            incididnt abor dolore magna aliqua.Ut enim ad minim veniam
          </div>
          <div className="flex flex-row gap-6 mt-6">
            <svg
              className="slider-icon social-media-icons"
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              ></path>
            </svg>
            <svg
              className="slider-icon social-media-icons"
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              ></path>
            </svg>
            <svg
              className="slider-icon social-media-icons"
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-row flex-1 md:w-1/2 gap-10  md:gap-28 justify-between md:justify-start mt-14 md:mt-0">
          <div className="flex flex-col order-2 md:order-1">
            <h3 className="font-inter text-[1rem] text-white">Contact Info</h3>
            <ul className="text-paragraph font-inter">
              <li className="list-item">+0123-456789</li>
              <li className="list-item">example@gmail.com</li>
            </ul>
          </div>

          <div className="flex flex-col order-1 md:order-2">
            <h3 className="font-inter text-[1rem] text-white">Open Hours</h3>
            <ul className="text-paragraph font-inter">
              <li className="list-item">Monday 09:00-18:00</li>
              <li className="list-item">Tuesday 09:00-18:00</li>
              <li className="list-item">Wednesday 09:00-18:00</li>
              <li className="list-item">Thursday 09:00-18:00</li>
              <li className="list-item">Saturday Closed</li>
              <li className="list-item">Sunday Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content pt-10">
        <p className="list-item text-[#cfc6c0]">
          Clothing Store - 8502 Preston Rd. IngwoodMaine 98380
        </p>
      </div>
    </div>
  );
};

export default Footer;
