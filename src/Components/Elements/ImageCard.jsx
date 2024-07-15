import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

const ImageCard = ({
  id,
  imgSrc,
  proName,
  price,
  classN,
  wishlisted,
  discountPercentage,
  inCard,
}) => {
  let [quantity, setQuantity] = useState(inCard); //STATE TO HANDLE QUANTITY

  useEffect(() => {
    if (quantity !== inCard) {
      setQuantity(inCard);
    }
  }, [inCard]);

  let { addToCard, removeFromCart, calculateRealPrice } =
    useContext(CartContext); //FUNCTIONS DESTRUCTORING FROM CONTEXT

  let { toggleWishlist } = useContext(WishlistContext); //FUNCTIONS DESTRUCTORING FROM CONTEXT
  const [wishlist, setWishlist] = useState(wishlisted); //STATE HANDLE ADD REMOVE TO WISHLIST

  if (wishlist !== wishlisted) {
    setWishlist(wishlisted);
  }

  //ON CLICK TO WISHLIST ICON
  const handleSetWishlist = (proID) => {
    setWishlist(!wishlist); //TOGGLE WISHLIST STATE
    toggleWishlist({ id: proID }); //SET REMOVE PRODUCT ID FROM WISHLIST
  };

  //ON CLICK TO PLUS ICON
  const addQuantity = () => {
    setQuantity(quantity + 1);
    // Start with quantity 1 if adding a new item
    addToCard({
      id: id,
      quantity: 1,
    });
  };

  //ON CLICK TO REMOVE ICON
  const removeQuantity = () => {
    //ADD QUANTITY ONLY WHEN ITS > 0
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(id);
    }
    return;
  };

  return (
    <div className={`card ${classN}`}>
      <div className="relative">
        <img
          src={imgSrc}
          className="w-full object-cover h-[300px] bg-[#f5f5f5]"
        />
        <div className="icons absolute top-[20px] right-[10px] w-fit flex flex-col gap-3">
          <svg
            className={`slider-icon ${wishlist && "wishlisted"}`}
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            onClick={() => handleSetWishlist(id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            ></path>
          </svg>
        </div>

        <div className="icons absolute p-3  bottom-0 left-0 flex flex-row w-full justify-center text-center opacity-[0.8] gap-3">
          <div className="flex flex-row gap-5 items-center">
            <svg
              data-slot="icon"
              className="slider-icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              onClick={removeQuantity}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14"
              ></path>
            </svg>

            <span className="slider-icon">{quantity}</span>

            <svg
              data-slot="icon"
              className="slider-icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              onClick={addQuantity}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="content py-5">
        <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary pb-3">
          {proName}
        </h5>
        <div className="price flex gap-3">
          <div className="low-price font-epilogue text-primary font-semibold text-[1.1rem]">
            {discountPercentage
              ? calculateRealPrice(price, discountPercentage)
              : price}
          </div>
          <div className="price font-epilogue text-secondary line-through font-normal text-[1.1rem]">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
