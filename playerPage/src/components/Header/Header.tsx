import "./style.css";
import HeaderInput from "../HeaderInput/HeaderInput";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.png";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo-wrapper">
          <BurgerButton />

          <Link to={"/"} className="header__logo">
            <img className="img header__img" src={logo} alt="Logo YouTube" />
          </Link>
        </div>

        <HeaderInput />

        <div className="right header__right">
          <HeaderMenu />
          <button className="profile">
            <img className="img profile__img" src={user} alt="User photo" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
