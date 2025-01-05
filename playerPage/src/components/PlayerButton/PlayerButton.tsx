import { FC } from "react";
import "./style.css";

interface PlayerButtonProps {
  elem: JSX.Element;
}

const PlayerButton: FC<PlayerButtonProps> = ({ elem }) => {
  return (
    <li className="control-list__element">
      <button className="control-list__btn">{elem}</button>
    </li>
  );
};

export default PlayerButton;
