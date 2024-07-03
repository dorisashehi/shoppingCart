import Home from "../Components/Home";
import Layout from "../Components/Layout";
import Collections from "../Components/Collections";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/collections",
        element: <Collections />,
      },
    ],
  },
];

export default routes;
