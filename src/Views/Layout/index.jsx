import Footer from "../Footer";
import Navigation from "../../Views/Navigation";
import { Outlet } from "react-router-dom";
import CartProvider from "../../Context/CartProvider";
import ProductsProvider from "../../Context/ProductsProvider";
import WishlistProvider from "../../Context/WishlistProvider";
import FilterProvider from "../../Context/FilterProvider";
import UserProvider from "../../Context/UserProvider";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <CartProvider>
        <WishlistProvider>
          <Navigation />
          <ProductsProvider>
            <FilterProvider>
              <UserProvider>
                <Outlet />
              </UserProvider>
            </FilterProvider>
          </ProductsProvider>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default Layout;
