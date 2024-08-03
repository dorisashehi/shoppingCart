import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ text, classN = '', children, clickAction, src = '' }) => {
  return (
    <Link to={src} className={`btn-primary ${classN}`} onClick={clickAction}>
      <span>{text}</span>
      {children}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  classN: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.node,
  clickAction: PropTypes.string,
};

export default Button;
