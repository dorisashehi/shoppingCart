import Slider from "react-slick";
import exampleImg from "../../assets/images/cart/example-cloth.png";
import ImageCard from "../Elements/ImageCard";

const ProductsSlider = () => {
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
            <ImageCard
              imgSrc={exampleImg}
              category="Couts"
              proName="Trendy brown Coust"
              lowPrice="34"
              price="56"
            />
            <ImageCard
              imgSrc={exampleImg}
              category="Couts"
              proName="Trendy brown Coust"
              lowPrice="34"
              price="56"
            />
            <ImageCard
              imgSrc={exampleImg}
              category="Couts"
              proName="Trendy brown Coust"
              lowPrice="34"
              price="56"
            />
            <ImageCard
              imgSrc={exampleImg}
              category="Couts"
              proName="Trendy brown Coust"
              lowPrice="34"
              price="56"
            />
            <ImageCard
              imgSrc={exampleImg}
              category="Couts"
              proName="Trendy brown Coust"
              lowPrice="34"
              price="56"
            />
            <ImageCard
              imgSrc={exampleImg}
              category="Couts"
              proName="Trendy brown Coust"
              lowPrice="34"
              price="56"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
