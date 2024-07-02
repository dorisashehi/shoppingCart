import Navigation from "../Navigation";
import Banner from "../Banner";
import ProductsSlider from "../ProductsSlider";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Banner />
      <ProductsSlider />
    </div>
  );
};

export default Home;
