import Stop from "../../assets/svg/Stop";
import Volume from "../../assets/svg/Volume";
import "./style.css";
import "./media.css";

const SmallPlayer = () => {
  return (
    <div className="player small-player">
      <button className="control-list__btn control-list__btn--small">
        <Stop />
      </button>
      <div className="road-wrapper">
        <span className="times">1:34</span>
        <input className="road" type="range" min="0" max="100" />
        <span className="times">-10:00</span>
      </div>
      <button className="control-list__btn control-list__btn--small">
        <Volume />
      </button>
    </div>
  );
};

export default SmallPlayer;
