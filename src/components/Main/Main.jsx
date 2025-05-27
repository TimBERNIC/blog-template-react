import "./Main.css";
import Content from "./Content";
import NavigationMenu from "./NavigationMenu";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <NavigationMenu />
          <Content />
        </div>
      </main>
    </>
  );
};

export default Main;
