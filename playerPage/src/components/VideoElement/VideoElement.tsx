import { Link } from "react-router-dom";
import "./style.css";
import { FC } from "react";

interface VideoElementProps {
  props: {
    img: string;
    title: string;
    author: string;
    time: string;
    views: string;
  };
}

const VideoElement: FC<VideoElementProps> = ({ props }) => {
  return (
    <li className="video-list__item">
      <Link className="video-list__link" to={"/"}>
        <article className="article">
          <div className="img__wrapper">
            <img
              className="img article__img"
              src={props.img}
              alt={props.title}
            />
            <span className="time">{props.time}</span>
          </div>

          <h3 className="title next-videos__title">{props.title}</h3>
          <div className="details next-videos__details">
            <span>{props.views} views</span>
            <span>{props.author}</span>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default VideoElement;
