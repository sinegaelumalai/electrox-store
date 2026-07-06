import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">

      <Hero />

      <HeroSlider />

      <Categories />

      <FeaturedProducts />

      <WhyChooseUs />

    </section>
  );
};

export default Home;