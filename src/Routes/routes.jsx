import Home from "../Views/Home";
import Layout from "../Views/Layout";
import Collections from "../Views/Collections";
import Cart from "../Views/Cart";
import ProductDetails from "../Views/Collections/ProductDetails";
import Checkout from "../Views/Checkout";
import Order from "../Views/Order";
import OrderConfirmation from "../Views/Order/OrderConfirmation";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Collections />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product-details/:proID",
        element: <ProductDetails />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "Ordered",
        element: <Order />,
      },
    ],
  },
];

export default routes;
