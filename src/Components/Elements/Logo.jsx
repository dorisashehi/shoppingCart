import { Link } from "react-router-dom";
const Logo = ({ logoImg, children, className }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {children}
      <img src={logoImg} className="w-[7rem] lg:w-36" />
    </Link>
  );
};
export default Logo;
