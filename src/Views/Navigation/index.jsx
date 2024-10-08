import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logoTop from "../../assets/images/navigation/logoTop.png";
import Logo from "../../Components/Logo";
import Sidebar from "../../Components/Sidebar";
import CartSummary from "../Cart/CartSummary";
import WishlistSummary from "../Wishlist/WishlistSummary";
import ProductsProvider from "../../Context/ProductsProvider";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import Spinner from "../Spinner";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const { countCartItems, cardLoading, setCardLoading } =
    useContext(CartContext);
  const { countWishlistItems, setWishlistLoading, wishlistLoading } =
    useContext(WishlistContext);

  const toggleMenu = () => {
    //EXPAND MENU ON MOBILE
    setToggle(!toggle);
  };

  const [sidebarOpened, setOpen] = useState({
    wishlist: false,
    card: false,
  });
  const handleOpenSidebar = (type) => {
    //OPEN SIDEBAR
    if (type === "card") {
      setOpen({ wishlist: false, card: !sidebarOpened.card });
    }
    if (type === "wishlist") {
      setOpen({ wishlist: true, card: !sidebarOpened.card });
    }
  };

  useEffect(() => {
    //REMOVE LOADING WHEN CART LENGTH CHANGED
    setTimeout(() => {
      setCardLoading(false);
    }, 1000);
  }, [countCartItems]);

  useEffect(() => {
    //REMOVE LOADING WHEN WISHLIST LENGTH CHANGED
    setTimeout(() => {
      setWishlistLoading(false);
    }, 1000);
  }, [countWishlistItems]);

  return (
    <>
      <nav className="bg-white fixed w-full z-10">
        <div className="content p-5 flex flex-wrap">
          <div className="w-3/5 lg:w-1/5 flex">
            <svg
              onClick={toggleMenu}
              className="hamburger-menu"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
            <Logo logoImg={logoTop}></Logo>
          </div>

          <div className="flex justify-end items-center lg:order-2 w-2/5 lg:w-1/5">
            <ul className="flex">
              {/* <li>
                <svg
                  className="menu-icon"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>
              </li> */}
              <li className="relative px-4">
                {countWishlistItems > 0 && (
                  <span className="cardCount right-[4px]">
                    {wishlistLoading ? (
                      <Spinner />
                    ) : (
                      <span className="text-center">{countWishlistItems}</span>
                    )}
                  </span>
                )}

                <svg
                  className="menu-icon"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  onClick={() => handleOpenSidebar("wishlist")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  ></path>
                </svg>
              </li>
              <li className="relative">
                {countCartItems > 0 && (
                  <span className="cardCount right-[-9px]">
                    {cardLoading ? (
                      <Spinner />
                    ) : (
                      <span className="text-center">{countCartItems}</span>
                    )}
                  </span>
                )}
                <svg
                  onClick={() => handleOpenSidebar("card")}
                  className="menu-icon"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>

          <ul
            className={`flex-col lg:flex-row lg:flex w-full lg:items-center justify-start lg:w-3/5 mt-xs border-t-2 border-b-4 px-5 lg:px-0 border-b-yellow border-x-2 border-x-gray lg:border-t-0 lg:border-b-0 lg:border-x-0 border-t-gray lg:border-none  pt-4 lg:pt-0 mt-3 lg:mt-0 duration-100 transition-all ease-out ${
              !toggle ? "hidden" : ""
            }`}
            id="navbar-sticky"
          >
            <li className="pb-5">
              <Link to="/" className="menu-item" aria-current="page">
                Home
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/shop" className="menu-item">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar
        sidebarOpened={sidebarOpened.card}
        handleOpenSidebar={() => handleOpenSidebar("card")}
      >
        <ProductsProvider>
          <CartSummary handleOpenSidebar={handleOpenSidebar} />
        </ProductsProvider>
      </Sidebar>

      <Sidebar
        sidebarOpened={sidebarOpened.wishlist}
        handleOpenSidebar={() => handleOpenSidebar("wishlist")}
      >
        <ProductsProvider>
          <WishlistSummary />
        </ProductsProvider>
      </Sidebar>
    </>
  );
};

export default Navigation;
