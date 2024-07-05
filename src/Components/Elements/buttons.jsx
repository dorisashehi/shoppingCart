import { Link } from "react-router-dom";
const Button = ({ text, classN, children }) => {
  return (
    <Link src="" className={`btn-primary ${classN}`}>
      <span>{text}</span>
      {children}
    </Link>
  );
};

export default Button;
