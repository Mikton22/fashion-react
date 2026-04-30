import "./footer.css";
import fb from "../../img/socials/fb.svg";
import inst from "../../img/socials/inst.svg";
import tw from "../../img/socials/tw.svg";
import inlogo from "../../img/socials/in.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__fashion">
        <span className="footer__fashion-text1">fashion</span>
        <span className="footer__fashion-text2">
          <span>Complete your style with awesome</span>
          <br />
          <span>clothes from us.</span>
        </span>
        <div className="fashion__logos">
          <span>
            <a href="#">
              <img src={fb} alt="fb" />
            </a>
          </span>
          <span>
            <a href="#">
              <img src={inst} alt="fb" />
            </a>
          </span>
          <span>
            <a href="#">
              <img src={tw} alt="fb" />
            </a>
          </span>
          <span>
            <a href="#">
              <img src={inlogo} alt="fb" />
            </a>
          </span>
        </div>
      </div>
      <div className="footer__text">
        <div className="fashion__company">
          <ul>
            <li>
              <span>Company</span>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="fashion__company">
          <ul>
            <li>
              <span>Quick Link</span>
            </li>
            <li>
              <a href="#">Share Location</a>
            </li>
            <li>
              <a href="#">Orders Tracking</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="fashion__company">
          <ul>
            <li>
              <span>Legal</span>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
