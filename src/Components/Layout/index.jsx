import Footer from "../Footer";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import CartProvider from "../../Context/CartProvider";
import ProductsProvider from "../../Context/ProductsProvider";
import WishlistProvider from "../../Context/WishlistProvider";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <CartProvider>
        <WishlistProvider>
          <Navigation />
          <ProductsProvider>
            <Outlet />
          </ProductsProvider>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default Layout;
