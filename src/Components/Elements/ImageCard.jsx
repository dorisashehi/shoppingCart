import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ImageCard = ({
  id,
  imgSrc,
  category,
  lowPrice,
  proName,
  price,
  classN,
}) => {
  //const [cartProp, setToCard] = useState({});

  let [quantity, setQuantity] = useState(0);
  let { addToCard, removeFromCart } = useContext(CartContext);

  const addQuantity = () => {
    setQuantity(quantity + 1);
    const newProd = {
      id: id,
      quantity: 1, // Start with quantity 1 if adding a new item
    };
    addToCard(newProd);
  };

  const removeQuantity = () => {
    //ADD QUANTITY ONLY WHEN ITS > 0
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const updatedPro = {
        id: id,
        quantity: quantity - 1, // Start with quantity 1 if adding a new item
      };
      removeFromCart(updatedPro);
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
            className="slider-icon"
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            ></path>
          </svg>
        </div>

        <div className="icons absolute p-3  bottom-0 left-0 flex flex-row w-full justify-center text-center opacity-[0.8] gap-3">
          <div className="flex flex-row gap-5 items-center">
            {/* <input type="button" value="-" />
            <input type="text" value="" />
            <input type="button" value="+" /> */}

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
        <h4 className="font-inter text-xs text-secondary pb-2 font-semibold">
          {category} {id}
        </h4>
        <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary pb-3">
          {proName}
        </h5>
        <div className="price flex gap-3">
          <div className="low-price font-epilogue text-primary font-semibold text-[1.1rem] lg:text-[1.3rem]">
            ${price}
          </div>
          <div className="price font-epilogue text-secondary line-through font-normal text-[1.1rem] lg:text-[1.3rem]">
            ${lowPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
