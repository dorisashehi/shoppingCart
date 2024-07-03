import Footer from "../Footer";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
