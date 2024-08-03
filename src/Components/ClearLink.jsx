import PropTypes from 'prop-types';

const ClearLink = ({ clickAction, children }) => {
  return (
    <div className="underline cursor-pointer sort-text md:self-end text-center" onClick={clickAction}>
      {children}
    </div>
  );
};

ClearLink.propTypes = {
  clickAction: PropTypes.func,
  children: PropTypes.node,
};

export default ClearLink;
