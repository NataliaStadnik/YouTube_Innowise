import "./style.css";
import "./media.css";
import Camera from "../../assets/svg/Camera";
import Dots from "../../assets/svg/Dots";
import Bell from "../../assets/svg/Bell";
import { useMediaQuery } from "react-responsive";
import Search from "../../assets/svg/Search";
import BtnDots from "../../assets/svg/BtnDots";
import { useContext } from "react";
import { MobileContext } from "../../main";

const HeaderMenu = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useContext(MobileContext);

  return (
    <ul className="icons-list">
      {!isTablet &&
        [<Camera />, <Dots />, <Bell />].map((elem) => (
          <li key={crypto.randomUUID()} className="icons-list__item">
            <button className="icons-list__btn">{elem}</button>
          </li>
        ))}

      {isMobile &&
        [<Search />, <BtnDots />].map((elem) => (
          <li key={crypto.randomUUID()} className="icons-list__item">
            <button className="icons-list__btn">{elem}</button>
          </li>
        ))}
    </ul>
  );
};

export default HeaderMenu;
