import "./style.css";
import video from "../../assets/images/current-video.jpg";
import ActionButton from "../ActionButton/ActionButton";
import { mocksBtn } from "../../mocks/mocksBtn";

const CurrentPlayer = () => {
  return (
    <div className="video-wrapper">
      <img
        className="img video-img"
        src={video}
        alt="Video: Dude You Re Getting A Telescope"
      />

      <h2 className="title title__big current-player__title">
        Dude You Re&nbsp;Getting A&nbsp;Telescope
      </h2>

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
