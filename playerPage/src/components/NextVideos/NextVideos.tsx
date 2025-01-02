import "./style.css";
import { mocksVideos } from "../../mocks/mocksVideo";
import VideoElement from "../VideoElement/VideoElement";

const NextVideos = () => {
  return (
    <section className="next-videos">
      <div className="next-videos__header">
        <h2 className="title title__big">Next</h2>
        <p className="title title__autoplay">AUTOPLAY</p>
      </div>
      <ul className="video-list">
        {mocksVideos.map((elem) => (
          <VideoElement props={elem} />
        ))}
      </ul>
    </section>
  );
};

export default NextVideos;
