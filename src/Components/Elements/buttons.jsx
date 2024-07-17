import { Link } from "react-router-dom";
const Button = ({ text, classN, children, clickAction }) => {
  return (
    <Link src="" className={`btn-primary ${classN}`} onClick={clickAction}>
      <span>{text}</span>
      {children}
    </Link>
  );
};

export default Button;
