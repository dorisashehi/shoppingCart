import ImageCard from "../Elements/ImageCard";
import exampleImg from "../../assets/images/cart/example-cloth.png";
const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-between gap-y-10">
      <ImageCard
        imgSrc={exampleImg}
        category="Couts"
        proName="Trendy brown Coust"
        lowPrice="34"
        price="56"
        classN="w-[100%] md:w-[31%]"
      />
      <ImageCard
        imgSrc={exampleImg}
        category="Couts"
        proName="Trendy brown Coust"
        lowPrice="34"
        price="56"
        classN="w-[100%] md:w-[31%]"
      />
      <ImageCard
        imgSrc={exampleImg}
        category="Couts"
        proName="Trendy brown Coust"
        lowPrice="34"
        price="56"
        classN="w-[100%] md:w-[31%]"
      />
      <ImageCard
        imgSrc={exampleImg}
        category="Couts"
        proName="Trendy brown Coust"
        lowPrice="34"
        price="56"
        classN="w-[100%] md:w-[31%]"
      />
      <ImageCard
        imgSrc={exampleImg}
        category="Couts"
        proName="Trendy brown Coust"
        lowPrice="34"
        price="56"
        classN="w-[100%] md:w-[31%]"
      />
      <ImageCard
        imgSrc={exampleImg}
        category="Couts"
        proName="Trendy brown Coust"
        lowPrice="34"
        price="56"
        classN="w-[100%] md:w-[31%]"
      />
    </div>
  );
};

export default ProductList;
