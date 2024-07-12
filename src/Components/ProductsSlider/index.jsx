import Slider from "react-slick";
import exampleImg from "../../assets/images/cart/example-cloth.png";
import ImageCard from "../Elements/ImageCard";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { WishlistContext } from "../../Context/WishlistContext";

const ProductsSlider = () => {
  const { products } = useContext(ProductsContext); //TAKE THAT FUNCTION PASTED TO OUTLET AS PROP

  var settings = {
    dots: true,
    speed: 500,
    autoplay: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dotsClass: "slick-dots button__bar",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
    ],
  };

  let { wishlisted } = useContext(WishlistContext); //GET WISHLIST FROM CONTEXT

  const isWishlisted = (id) => {
    const index = wishlisted.find((item) => item.id === id);
    if (index) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full py-20">
      <div className="content">
        <div className="pb-10 text-center md:text-left">
          <h3 className="font-epilogue text-[1rem] font-normal">
            Our Products
          </h3>
          <h1 className="font-epilogue text-[1.7rem] font-medium mt-3">
            Our Top Seller Products
          </h1>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {products.data.slice(0, 10).map((product, index) => (
              <ImageCard
                id={product.id}
                key={index}
                imgSrc={product.thumbnail}
                category={product.category}
                proName={product.title}
                lowPrice="34"
                price={product.price}
                classN="mr-3"
                wishlisted={isWishlisted(product.id)}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
