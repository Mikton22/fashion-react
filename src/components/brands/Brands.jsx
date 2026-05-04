import "./brands.css";
import hm from "../../img/brands/HM.png";
import obey from "../../img/brands/Obey.png";
import shop from "../../img/brands/Shopify.png";
import lacoste from "../../img/brands/Lacoste.png";
import levis from "../../img/brands/Levis.png";
import amazon from "../../img/brands/Amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="https://www2.hm.com/">
              <img src={hm} alt="hm" />
            </a>
          </li>
          <li>
            <a href="https://obeyclothing.com/">
              <img src={obey} alt="obey" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={shop} alt="shop" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={lacoste} alt="lacoste" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={levis} alt="levis" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={amazon} alt="amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
