import "./form.css";

const Form = ({ addItem, updateItem, editId, editName, setEditName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editName.trim()) return;

    if (editId) {
      updateItem(editName);
    } else {
      addItem(editName);
    }

    setEditName("");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter grocery item..."
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />

      <button type="submit" className="btn">
        {editId ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;