import Button from "./Button";
const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// Header.defaultProps = {
//   title: "Bruh"
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired
// };

export default Header;
