import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row form-check-label">
      <div className="col-9 pe-0">
        <input
          type="text"
          placeholder="Write a new Task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control h-100"
        />
      </div>
      <div className="col-3 ps-1">
        <button className="btn btn-primary btn-sm h-100 w-100 text-center">
          Save
        </button>
      </div>
    </form>
  );
};
