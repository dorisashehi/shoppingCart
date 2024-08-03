import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { ProductsContext } from '../Context/ProductsContext';
import PropTypes from 'prop-types';

const OrderSidebar = ({ children }) => {
  const { getProd } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP
  const { findTotal, countCartItems } = useContext(CartContext);
  return (
    <>
      <div className="border-b-2 border-borderColor pb-3 font-medium">
        <h1 className="">Order Summary</h1>
      </div>
      <ul className="filter-content mt-6">
        <li className="flex justify-between mb-2 text-sm">
          <span>Items</span>
          <span className="text-primary font-medium">{countCartItems}</span>
        </li>
        <li className="flex justify-between mb-2 text-sm">
          <span>Subtotal</span>
          <span className="text-primary font-medium">${findTotal(getProd)}</span>
        </li>
        <li className="flex justify-between  mb-2 text-sm pb-2">
          <span>Shipping</span>
          <span className="text-primary font-medium">$00.00</span>
        </li>
        <li className="flex justify-between mb-2 text-sm border-t-2 border-borderColor py-2">
          <span>Total</span>
          <span className="text-primary font-medium">${findTotal(getProd)}</span>
        </li>
      </ul>
      <div className=" w-[100%] bg-white mt-3">{children}</div>
    </>
  );
};

OrderSidebar.propTypes = {
  children: PropTypes.node,
};
export default OrderSidebar;
