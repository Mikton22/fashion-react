import Card from "../card/Card";
import "./young.css";
import promo01 from "../../img/images/promo-01.jpg";
import promo02 from "../../img/images/promo-02.jpg";

const Young = () => {
  return (
    <div className="young">
      <div className="young__block">
        <div className="young__header">Young’s Favourite</div>
        <div className="young__slider">
          <Card title={"Trending on instagram"} img={promo01} />
          <Card title={"All Under $40"} img={promo02} />
        </div>
      </div>
    </div>
  );
};

export default Young;
