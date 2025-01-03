import { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";

interface FooterElementProps {
  text: string;
  img: JSX.Element;
}

const FooterElement: FC<FooterElementProps> = ({ img, text }) => {
  return (
    <li className="nav-list__item">
      <Link className="nav-list__link guide__title" to={"/"}>
        {img}
        <p>{text}</p>
      </Link>
    </li>
  );
};

export default FooterElement;
