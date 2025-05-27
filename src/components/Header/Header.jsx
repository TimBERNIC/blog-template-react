import "./Header.css";
import Baseline from "./Baseline";
import Title from "./Title";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Title title="My Blog" />
        <Baseline />
      </div>
    </header>
  );
};

export default Header;
