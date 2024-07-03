import Navigation from "../Navigation";
import Banner from "../Banner";
import ProductsSlider from "../ProductsSlider";
import Footer from "../Footer";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Banner />
      <ProductsSlider />
      <Footer />
    </div>
  );
};

export default Home;
