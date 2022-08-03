import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Hero from "../../containers/Hero";
import Newsletter from "../../containers/Newsletter";
import Products from "../../containers/Products";


const Home = () => {

  const btn = document.getElementById("slick-arrow");
  console.log(btn)

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;