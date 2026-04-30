import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
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
    </div>
  );
}

export default App;
