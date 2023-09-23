import { TaskRow } from "./TaskRow";

export function TaskTable({ title, tasks, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered table-secondary">
      <thead>
        <tr className="table-primary">
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}
