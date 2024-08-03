import PropTypes from 'prop-types';

const PlusMinus = ({ addQuantity, removeQuantity, quantity }) => {
  return (
    <div className="flex flex-row items-center">
      <svg
        data-slot="icon"
        className="plusMinus hover:bg-yellow border-2"
        fill="none"
        strokeWidth="2.2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        onClick={removeQuantity}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
      </svg>

      <span className="plusMinus border-t-2 border-b-2 font-extrabold">{quantity}</span>

      <svg
        data-slot="icon"
        className="plusMinus hover:bg-yellow border-2"
        fill="none"
        strokeWidth="2.2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        onClick={addQuantity}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
      </svg>
    </div>
  );
};

PlusMinus.propTypes = {
  addQuantity: PropTypes.func,
  removeQuantity: PropTypes.func,
  quantity: PropTypes.number,
};
export default PlusMinus;
