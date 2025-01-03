import "./style.css";
import "./media.css";
import video from "../../assets/images/current-video.jpg";
import ActionButton from "../ActionButton/ActionButton";
import { mocksBtn } from "../../mocks/mocksBtn";
import { useContext } from "react";
import { MobileContext } from "../../main";
import Arrow from "../../assets/svg/Arrow";

const CurrentPlayer = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div className="video-wrapper">
      <img
        className="img video-img"
        src={video}
        alt="Video: Dude You Re Getting A Telescope"
      />

      <div className="header-wrapper">
        <h2 className="title title__big current-player__title">
          Dude You Re&nbsp;Getting A&nbsp;Telescope
        </h2>
        {isMobile && (
          <button className="btn-arrow">
            <Arrow />
          </button>
        )}
      </div>

      <div className="actions">
        <span className="details actions__details">123k views</span>
        <ul className="actions-list">
          {mocksBtn.map((elem) => (
            <ActionButton
              key={crypto.randomUUID()}
              elem={elem.img}
              text={elem?.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentPlayer;
