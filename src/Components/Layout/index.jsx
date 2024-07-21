import Footer from "../Footer";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import CartProvider from "../../Context/CartProvider";
import ProductsProvider from "../../Context/ProductsProvider";
import WishlistProvider from "../../Context/WishlistProvider";
import FilterProvider from "../../Context/FilterProvider";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <CartProvider>
        <WishlistProvider>
          <Navigation />
          <ProductsProvider>
            <FilterProvider>
              <Outlet />
            </FilterProvider>
          </ProductsProvider>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default Layout;
