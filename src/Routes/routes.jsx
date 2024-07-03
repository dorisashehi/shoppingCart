import Home from "../Components/Home";
import Layout from "../Components/Layout";
import Products from "../Components/Products";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
];

export default routes;
