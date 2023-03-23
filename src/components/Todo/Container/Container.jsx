import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./Container.css";

const Container = ({ todos, addTodo, checkTodo, deleteTodo }) => {
  return (
    <div className="app-container">
      <div className="todo-container">
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
      </div>
    </div>
  );
};

export default Container;
