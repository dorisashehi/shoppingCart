import Home from "../Components/Home";
import Layout from "../Components/Layout";
import Collections from "../Components/Collections";
import Cart from "../Components/Cart";
import ProductDetails from "../Components/Collections/ProductDetails";
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
    ],
  },
];

export default routes;
