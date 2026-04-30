import "./banner.css";
import imgBanner from "./../../img/images/promo-img.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__img">
            <img src={imgBanner} alt="banner" />
          </div>
          <div className="banner__text">
            <span className="banner__highlight-white">payday</span>
            <span className="banner__highlight">Sale now</span>
            <span className="banner__text_info1">
              <span>Spend minimal $100 get 30% off</span>
              <br />
              <span>voucher code for your next purchase</span>
            </span>
            <span className="banner__text_info2">1 June - 10 June 2021</span>
            <span className="banner__text_info3">
              *Terms & Conditions apply
            </span>
            <div className="banner__btn">
              <button>
                <span>shop now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
