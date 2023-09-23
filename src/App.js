import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { done: false, name: taskName }]);
    } else {
      alert(
        `The task ${taskName} already exists, please enter a different task.`
      );
    }
  }

  const toggleTask = (task) =>
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createTask} />
        <TaskTable
          title={"Task Incomplete"}
          tasks={tasksItems}
          toggleTask={toggleTask}
        />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted === true && (
          <TaskTable
            title={"Task Complete"}
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
