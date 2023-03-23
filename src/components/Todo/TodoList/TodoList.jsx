import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
