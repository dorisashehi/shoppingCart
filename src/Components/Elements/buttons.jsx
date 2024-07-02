import { Link } from "react-router-dom";
const Button = ({ text, children }) => {
  return (
    <Link src="" className="btn-primary">
      <span>{text}</span>
      {children}
    </Link>
  );
};

export default Button;
