import './baseFooter.css'

const BaseFooter = () => {
  return (
    <div className="baseFooter">
      <div className="baseFooter__text">
        <div className="baseFooter__text-main">
          <span className="baseFooter__text-main1">
            JOIN SHOPPING COMMUNITY TO{" "}
          </span>
          <span className="baseFooter__text-main2">
            GET MONTHLY PROMO
          </span>
        </div>
        <span className="baseFooter__text-second">
          Type your email down below and be young wild generation
        </span>
      </div>
      <div className="baseFooter__callback">
        <div className="baseFooter__callback-box">
            <span className="baseFooter__callback-text">
                <span>Add your email here</span>
            </span>
            <div className="baseFooter__callback-button">
                <span>SEND</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BaseFooter;
