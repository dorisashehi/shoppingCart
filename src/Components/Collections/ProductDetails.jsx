import Banner from "../Banner";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import Button from "../Elements/buttons";
const ProductDetails = () => {
  const { proID } = useParams();
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  let { calculateRealPrice, addMoreProd } = useContext(CartContext); //FUNCTIONS DESTRUCTORING FROM CONTEXT
  let { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  let [quantity, setQuantity] = useState(0); //STATE TO HANDLE QUANTITY
  const [prodLoading, setProdLoading] = useState(true);

  //ON CLICK TO PLUS ICON
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  //ON CLICK TO REMOVE ICON
  const removeQuantity = () => {
    //ADD QUANTITY ONLY WHEN ITS > 0
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    return;
  };

  const changeProd = (event) => {
    event.preventDefault();
    addMoreProd({
      id: product.id,
      quantity: quantity,
    });
  };
  useEffect(() => {
    const getProd = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${proID}`);
        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        setProduct(data);
        setTimeout(() => {
          setProdLoading(false);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
    };

    getProd();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Banner title="Shopping Cart" path="Home / Shop / Product Details" />
      <div className="w-full py-20">
        {!error ? (
          <div className="content justify-center flex flex-col lg:flex-row gap-[30px] md:gap-3">
            <div className="flex-1 lg:w-1/2 prod-details">
              {
                <Slider
                  {...settings}
                  className="flex-1 md:w-[60%] mx-auto lg:w-[90%]"
                >
                  {product.images?.map((image, index) => (
                    <div key={index}>
                      <img src={image} className="bg-[#f5f5f5]" />
                    </div>
                  ))}
                </Slider>
              }
            </div>
            <div className="flex-1 lg:w-1/2">
              <div className="content py-5">
                <h4 className="font-inter text-md text-secondary pb-2 font-semibold">
                  {product.category}
                </h4>
                <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-2xl text-primary pb-3">
                  {product.title}
                </h5>
                <div className="price flex gap-3">
                  <div className="low-price font-epilogue text-primary font-semibold text-md lg:text-2xl">
                    {product.discountPercentage
                      ? calculateRealPrice(
                          product.price,
                          product.discountPercentage
                        )
                      : product.price}
                  </div>
                  <div className="price font-epilogue text-secondary line-through font-normal text-md lg:text-2xl">
                    ${product.price}
                  </div>
                </div>
                <div className="font-inter text-sm text-secondary pt-2 pb-5 font-medium ">
                  {product.description}
                </div>
                <div className="prod-paragraph py-3">
                  InStock:{" "}
                  <span className="prod-paragraph-value">{product.stock}</span>
                </div>
                <div className="pt-4 flex gap-5">
                  <div className="flex flex-row items-center">
                    <svg
                      data-slot="icon"
                      className="plusMinus hover:bg-yellow"
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

                    <span className="plusMinus">{quantity}</span>

                    <svg
                      data-slot="icon"
                      className="plusMinus hover:bg-yellow"
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
                  <Button
                    classN="text-[0.9rem]"
                    text="Add To Card"
                    clickAction={(event) => changeProd(event)}
                  ></Button>

                  <svg
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className={`plusMinus ${
                      isWishlisted(product.id) && "wishlisted"
                    }`}
                    onClick={() => toggleWishlist({ id: product.id })}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    ></path>
                  </svg>
                </div>
                <div className="border-borderColor border-2 my-10"></div>
                <div className="prod-paragraph">
                  SKU :{"  "}
                  <span className="prod-paragraph-value">{product.sku}</span>
                </div>
                <div className="prod-paragraph">
                  Tags :{"  "}
                  <span className="prod-paragraph-value pb-2 ">
                    {product.tags?.join(", ")}
                  </span>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="flex flex-row">
                <div>Description</div>
                <div>Additional Information</div>
              </div>
              <div>{product.description}</div>
              <div>
                <ul>
                  <li>
                    Weight: <span>{product.weight}</span>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        ) : (
          { error }
        )}
      </div>
    </>
  );
};

export default ProductDetails;
