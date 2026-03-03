import singleitem from "./singleitem";
import "./items.css";

const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <singleitem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;