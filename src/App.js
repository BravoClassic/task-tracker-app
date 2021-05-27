import "./styles.css";
import { useState } from "react";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    console.log(`deleted ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        showAddTask={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks!"
      )}
    </div>
  );
}

//Class Based Component
// class App extends React.Component{
//   render(){
//     return <Header />
//   }
// }
// export default App;

///CSs IN Js
// const styling = {
//   color:'red'
// }
