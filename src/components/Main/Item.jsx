import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemSubtitle from "./ItemSubtitle";
import ItemTitle from "./ItemTitle";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle title={props.title} />
      <ItemSubtitle subTitle={props.subTitle} />
      <ItemPicture picture={props.picture} />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default Item;
