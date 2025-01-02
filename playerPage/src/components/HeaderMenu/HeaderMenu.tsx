import "./style.css";
import Camera from "../../assets/svg/Camera";
import Dots from "../../assets/svg/Dots";
import Bell from "../../assets/svg/Bell";

const HeaderMenu = () => {
  return (
    <ul className="icons-list">
      {[<Camera />, <Dots />, <Bell />].map((elem) => (
        <li key={crypto.randomUUID()} className="icons-list__item">
          <button className="icons-list__btn">{elem}</button>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
