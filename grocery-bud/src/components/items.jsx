import SingleItem from "./singleitem";
import "./items.css";

const Items = ({ items, editCompleted, deleteItem, startEdit }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          editCompleted={editCompleted}
          deleteItem={deleteItem}
          startEdit={startEdit}
        />
      ))}
    </div>
  );
};

export default Items;