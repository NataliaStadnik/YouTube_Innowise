import AllScreen from "../../assets/svg/AllScreen";
import Next from "../../assets/svg/Next";
import Setting from "../../assets/svg/Setting";
import Stop from "../../assets/svg/Stop";
import Subtitle from "../../assets/svg/Subtitle";
import Volume from "../../assets/svg/Volume";
import WideScreen from "../../assets/svg/WideScreen";
import PlayerButton from "../PlayerButton/PlayerButton";
import "./style.css";

const BigPlayer = () => {
  return (
    <div className="player big-player">
      <div className="times">
        <span>1:34</span>
        <span>19:00</span>
      </div>
      <input className="road" type="range" min="0" max="100" />
      <div className="control-panel">
        <ul className="control-list control-list__left">
          {[<Stop />, <Next />, <Volume />].map((elem) => (
            <PlayerButton key={crypto.randomUUID()} elem={elem} />
          ))}
          <li className="control-list__element">
            <input className="volume-slider" type="range" min="0" max="100" />
          </li>
        </ul>

        <ul className="control-list control-list__right">
          {[<Subtitle />, <Setting />, <WideScreen />, <AllScreen />].map(
            (elem) => (
              <PlayerButton key={crypto.randomUUID()} elem={elem} />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default BigPlayer;
