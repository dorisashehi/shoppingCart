import Loading from '../../assets/images/loading.gif';
import PropTypes from 'prop-types';

const Spinner = ({ classN }) => {
  return (
    <div className="w-full">
      <img src={Loading} className={`${classN} m-auto`} />
    </div>
  );
};

Spinner.propTypes = {
  classN: PropTypes.string,
};

export default Spinner;
