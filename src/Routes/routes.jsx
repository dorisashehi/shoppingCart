import Home from "../Components/Home";
import Layout from "../Components/Layout";
import Collections from "../Components/Collections";
import Cart from "../Components/Cart";
import ProductDetails from "../Components/Collections/ProductDetails";
import Checkout from "../Components/Checkout";
import Order from "../Components/Order";
import OrderConfirmation from "../Components/Order/OrderConfirmation";
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
