import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemTitle from "./ItemTitle";

const AboutMe = (props) => {
  return (
    <div className="about-me-box">
      <ItemTitle title={props.title} />
      <ItemPicture picture={props.picture} />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default AboutMe;
