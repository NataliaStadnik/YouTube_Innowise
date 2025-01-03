import "./style.css";
import "./media.css";
import HeaderInput from "../HeaderInput/HeaderInput";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.png";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useContext } from "react";
import { MobileContext } from "../../main";

const Header = () => {
  const isMobile = useContext(MobileContext);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo-wrapper">
          {!isMobile && <BurgerButton />}

          <Link to={"/"} className="header__logo">
            <img className="img header__img" src={logo} alt="Logo YouTube" />
          </Link>
        </div>

        {!isMobile && <HeaderInput />}

        <div className="right header__right">
          <HeaderMenu />

          {!isMobile && (
            <button className="profile">
              <img className="img profile__img" src={user} alt="User photo" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
