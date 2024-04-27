import "../styles/Header.scss";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <img src={logo} alt="logo" height="25px" />
          </li>
          <li>MENU</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
