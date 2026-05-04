import Promo from "../components/promo/Promo";
import Brands from "../components/brands/Brands";
import Arrivals from "../components/arrivals/Arrivals";
import Banner from "../components/banner/Banner";
import Young from "../components/young/Young";
import Download from "../components/download/Download";
import BaseFooter from "../components/baseFooter/BaseFooter";

function Home() {
  return (
    <>
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Young />
      <Download />
      <BaseFooter />
    </>
  );
}

export default Home;
