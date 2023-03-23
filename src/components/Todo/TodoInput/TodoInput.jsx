import { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (!title) return alert("Please enter todo...");
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        className="todo-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        aria-label="todo-title-input"
        placeholder="Enter Todo..."
      />
      <button className="add-todo-btn" onClick={handleAddTodo}>
        ADD TODO
      </button>
    </div>
  );
};

export default TodoInput;
