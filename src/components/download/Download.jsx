import "./download.css";
import phone from "../../img/images/vouchers-img.png";
import ios from "../../img/icons/app-store.png";
import android from "../../img/icons/google-play.png";

const Download = () => {
  return (
    <div className="download">
      <div className="download__container-textMain">
        <div className="download__text">
          <span>DOWNLOAD APP &</span>
          <br />
          <span>GET THE VOUCHER!</span>
        </div>
        <div className="download__text-second">
          <span>Get 30% off for first transaction using</span>
          <br />
          <span>Rondovision mobile app for now.</span>
        </div>
        <div className="download__icons">
          <div className="download__icon1">
            <img src={ios} alt="ios" />
          </div>
          <div className="download__icon2">
            <img src={android} alt="android" />
          </div>
        </div>
      </div>
      <div className="download__phone">
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
};

export default Download;
