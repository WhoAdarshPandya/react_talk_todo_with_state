import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Container from "./components/Todo/Container/Container";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const id = Math.random().toString(16).slice(2);
    const completed = false;

    setTodos((prevTodos) => [...prevTodos, { title, completed, id }]);
  };

  const checkTodo = (id, completed) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <React.Fragment>
      <Header notificationCount={todos.length} />
      <Container
        todos={todos}
        addTodo={addTodo}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </React.Fragment>
  );
};

export default App;
