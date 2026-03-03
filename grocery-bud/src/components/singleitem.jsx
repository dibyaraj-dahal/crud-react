import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

const SingleItem = ({ item }) => {
  return (
    <div className="single-item">
      <input type="checkbox" checked={item.completed} onChange={() => null} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>

      <button className="btn icon-btn" type="button" onClick={() => null}>
        <FiEdit size={18} />
      </button>

      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => null}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;