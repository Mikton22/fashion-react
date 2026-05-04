import logo from "../../img/icons/logo.svg";
import stl from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {

  return (
    <header className={stl.header}>
      <div className="container">
        <div className={stl.header__row}>
          <div className={stl.header__logo}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <span>Fashion</span>
          </div>
          <nav className={stl.header__nav}>
            <ul>
              <li>
                <a href="#">CATALOGUE</a>
              </li>
              <li>
                <a href="#">FASHION</a>
              </li>
              <li>
                <a href="#">FAVOURITE</a>
              </li>
              <li>
                <a href="#">LIFESTYLE</a>
              </li>
              <li>
                <Link to="/login">
                  <button className={stl.header__nav_button}>SIGN UP</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
