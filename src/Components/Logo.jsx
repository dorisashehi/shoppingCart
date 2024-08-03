import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ logoImg, children, className }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {children}
      <img src={logoImg} className="w-[7rem] lg:w-36" />
    </Link>
  );
};

function validateURL(url) {
  //check if its passed URL as paramenter
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  return regex.test(url);
}

Logo.propTypes = {
  logoImg: function (props, propName, componentName) {
    if (validateURL(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
    }
  },
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Logo;
