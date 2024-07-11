import Footer from "../Footer";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import CartProvider from "../Context/CartProvider";
import ProductsProvider from "../Context/ProductsProvider";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <CartProvider>
        <Navigation />
        <ProductsProvider>
          <Outlet />
        </ProductsProvider>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Layout;
