import Banner from "../Banner";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";
import { CartContext } from "../../Context/CartContext";
import Button from "../Elements/buttons";
const ProductDetails = () => {
  const { proID } = useParams();
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});

  let { addToCard, removeFromCart, calculateRealPrice, inCard } =
    useContext(CartContext); //FUNCTIONS DESTRUCTORING FROM CONTEXT
  let [quantity, setQuantity] = useState(inCard || 0); //STATE TO HANDLE QUANTITY

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

  useEffect(() => {
    const getProd = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${proID}`);
        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getProd();
  }, []);

  return (
    <>
      <Banner title="Shopping Cart" path="Home / Shop / Product Details" />
      <div className="w-full py-20">
        <div className="content justify-center flex flex-col md:flex-row gap-[30px] md:gap-3">
          <div className="w-1/2">{error}</div>
          <div className="w-1/2">
            <div className="content py-5">
              <h4 className="font-inter text-md text-secondary pb-2 font-semibold">
                {product.category}
              </h4>
              <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-2xl text-primary pb-3">
                {product.title}
              </h5>
              <div className="price flex gap-3">
                <div className="low-price font-epilogue text-primary font-semibold text-2xl">
                  {product.discountPercentage
                    ? calculateRealPrice(
                        product.price,
                        product.discountPercentage
                      )
                    : product.price}
                </div>
                <div className="price font-epilogue text-secondary line-through font-normal text-2xl">
                  ${product.price}
                </div>
              </div>
              <div className="font-inter text-sm text-secondary pb-2 font-medium">
                {product.description}
              </div>
              <div className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary py-3">
                InStock: {product.stock}
              </div>
              <div className="pt-4 flex gap-5">
                <div className="flex flex-row items-center">
                  <svg
                    data-slot="icon"
                    className="plusMinus"
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
                    className="plusMinus"
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
                <Button text="Add To Card"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
