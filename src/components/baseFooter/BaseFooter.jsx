import { useState } from "react";
import "./baseFooter.css";

const BaseFooter = () => {
  const [send, setSend] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!send) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(send)) {
      newErrors.email = "Некорректный email";
    }
    return newErrors;
  };

  const handleSend = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("EMAIL SENT:", send);
    setSend("");
  };

  return (
    <div className="baseFooter">
      <div className="baseFooter__text">
        <div className="baseFooter__text-main">
          <span className="baseFooter__text-main1">
            JOIN SHOPPING COMMUNITY TO{" "}
          </span>
          <span className="baseFooter__text-main2">GET MONTHLY PROMO</span>
        </div>
        <span className="baseFooter__text-second">
          Type your email down below and be young wild generation
        </span>
      </div>
      <div className="baseFooter__callback">
        <div className="baseFooter__callback-box">
          <span className="baseFooter__callback-text">
            <input
              placeholder="Add your email here"
              value={send}
              onChange={(e) => setSend(e.target.value)}
              className={errors.email ? "input-error" : ""}
            />
          </span>
          <div className="baseFooter__callback-button">
            <span>
              <button onClick={handleSend}>SEND</button>
            </span>
          </div>
        </div>
        {/* ERROR */}
        {errors.email && (
          <span className="baseFooter__error">{errors.email}</span>
        )}
      </div>
    </div>
  );
};

export default BaseFooter;
