import "./promo.css";
import promoImg from "./../../img/images/header-img.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>LET’S</span> <br />
              </span>
              EXPLORE <br />
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>{" "}
              <br />
              CLOTHES.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo-btn">
              <span className="promo__btn-decor"></span>
              <button className="promo__btn-wrapper">
                <span>Shop Now</span>
              </button>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promoImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
