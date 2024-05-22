import Carousel from "../../components/carousel";
import Header from "../../components/header";
import Layout from "../../components/header/layout";
function HomePage() {
  return (
    <div>
      <Layout />
      <Header />
      <Carousel numberOfSlide={1} category={"Trending"} />
      <Carousel numberOfSlide={6} category={"Horror"} />
      <Carousel numberOfSlide={6} category={"Comedy"} />
      <Carousel numberOfSlide={6} category={"Action"} />
    </div>
  );
}

export default HomePage;
