import Search from "../../assets/svg/Search";
import "./style.css";

const HeaderInput = () => {
  return (
    <div className="input-wrapper">
      <input
        className="input header__input"
        type="search"
        name="search"
        placeholder="Search"
      />
      <Search classNames={"img input-wrapper__img"} />
    </div>
  );
};

export default HeaderInput;
