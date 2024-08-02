import logoBottom from "../../assets/images/logo-bottom.png";
import Logo from "../../Components/Logo";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <svg
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="slider-icon social-media-icons"
              >
                <path d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z" />
              </svg>
            </Link>
            <Link to="/">
              <svg
                className="slider-icon social-media-icons"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z" />
                <path d="M8.05 6.5 A1.55 1.5 0 0 1 6.5 8 A1.55 1.5 0 0 1 4.95 6.5 A1.55 1.5 0 0 1 8.05 6.5 z" />
              </svg>
            </Link>
            <Link to="/">
              <svg
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="slider-icon social-media-icons"
              >
                <path d="M15.527 17.921v-2.066c-.669.448-1.32.67-1.952.67-.298 0-.631-.094-1.004-.277-.223-.151-.354-.317-.393-.503-.11-.224-.178-.708-.178-1.454V11h3V9h-3V5.644h-1.772c-.149.782-.298 1.338-.448 1.673-.184.41-.482.782-.891 1.116a4 4 0 01-1.285.725V11H9v4.521c0 .52.073.964.223 1.337.111.298.334.595.671.893.259.262.631.484 1.115.67.595.15 1.114.223 1.562.223.52 0 1.004-.056 1.45-.167a5.75 5.75 0 001.506-.556" />
              </svg>
            </Link>
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
