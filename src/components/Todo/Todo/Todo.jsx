import "./Todo.css";

const Todo = ({ todo, deleteTodo, checkTodo }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        name="todo-check"
        className="todo-check"
        checked={todo.completed}
        onChange={() => checkTodo(todo.id, !todo.completed)}
      />
      <span
        className="todo-content"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button className="todo-delete-btn" onClick={() => deleteTodo(todo.id)}>
        DELETE
      </button>
    </div>
  );
};

export default Todo;
