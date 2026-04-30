import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import BaseFooter from "./components/baseFooter/BaseFooter";
import Brands from "./components/brands/Brands";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Young from "./components/young/Young";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Young />
      <Download />
      <BaseFooter />
      <Footer />
    </div>
  );
}

export default App;
