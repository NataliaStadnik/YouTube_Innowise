import { mocksFooterBtn } from "../../mocks/mocksFooterBtn";
import FooterElement from "../FooterElement/FooterElement";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <ul className="list-reset nav-list">
          {mocksFooterBtn.map((elem) => (
            <FooterElement
              key={crypto.randomUUID()}
              img={elem.img}
              text={elem.text}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
