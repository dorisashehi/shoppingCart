import Slider from "react-slick";
import exampleImg from "../../assets/images/cart/example-cloth.png";
import ImageCard from "../Elements/ImageCard";

const ProductsSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <div className="w-full py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-10">
          <h3 className="font-epilogue text-[19px] font-normal">
            Our Products
          </h3>
          <h1 className="font-epilogue text-[23px] font-medium mt-3">
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
