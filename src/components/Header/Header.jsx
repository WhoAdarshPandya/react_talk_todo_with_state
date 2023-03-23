import "./Header.css";

const Header = ({ notificationCount }) => {
  return (
    <nav>
      <h4>Todo App</h4>
      <div>
        Todos Count: <span>{notificationCount ?? 0}</span>
      </div>
    </nav>
  );
};

export default Header;
