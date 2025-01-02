import { FC } from "react";
import "./style.css";

interface ActionButtonProps {
  elem: JSX.Element;
  text?: string;
}

const ActionButton: FC<ActionButtonProps> = ({ elem, text }) => {
  return (
    <li className="actions-list__item">
      <button className="actions-list__btn">
        {elem}
        <span>{text}</span>
      </button>
    </li>
  );
};

export default ActionButton;
