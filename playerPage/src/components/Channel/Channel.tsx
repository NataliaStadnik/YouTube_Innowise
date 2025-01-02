import { Link } from "react-router-dom";
import "./style.css";
import channel from "../../assets/images/channel.jpg";

const Channel = () => {
  return (
    <div className="channel channel__wrapper">
      <img className="channel__img" src={channel} alt="Channel: Food & Drink" />
      <div className="channel__info">
        <Link to={"/"}>
          <h3 className="title channel__title">Food &amp;&nbsp;Drink</h3>
        </Link>

        <p className="published">Published on&nbsp;14&nbsp;Jun 2019</p>
        <p className="channel__descr">
          A&nbsp;successful marketing plan relies heavily on&nbsp;the
          pulling-power of&nbsp;advertising copy. Writing result-oriented
          ad&nbsp;copy is&nbsp;difficult, as&nbsp;it&nbsp;must appeal&nbsp;to,
          entice, and convince consumers to&nbsp;take action. There
          is&nbsp;no&nbsp;magic formula to&nbsp;write perfect ad&nbsp;copy;
          it&nbsp;is&nbsp;based on&nbsp;a&nbsp;number of&nbsp;factors, including
          ad&nbsp;placement, demographic, even the consumer&rsquo;s mood when
          they see your&nbsp;ad.
        </p>
        <button className="details">Show more</button>
      </div>
      <p className="subscribe">Subscribe&nbsp;2.3m</p>
    </div>
  );
};

export default Channel;
