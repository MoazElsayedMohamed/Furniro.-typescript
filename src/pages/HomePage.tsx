import Categories from "../components/categories/Categories";
import HomeHero from "../components/hero/HomeHero";
import Products from "../components/products/Products";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <Categories />
      <Products />
    </div>
  );
};

export default HomePage;
