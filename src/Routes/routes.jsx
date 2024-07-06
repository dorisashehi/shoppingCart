import Home from "../Components/Home";
import Layout from "../Components/Layout";
import Collections from "../Components/Collections";
import Cart from "../Components/Cart";
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
    ],
  },
];

export default routes;
