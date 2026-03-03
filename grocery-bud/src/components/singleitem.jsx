import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./singleitem.css";

const SingleItem = ({ item, editCompleted, deleteItem, startEdit }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />

      <p className={item.completed ? "completed" : ""}>{item.name}</p>

      <button onClick={() => startEdit(item)}>
        <FiEdit />
      </button>

      <button onClick={() => deleteItem(item.id)}>
        <FiTrash2 />
      </button>
    </div>
  );
};

export default SingleItem;