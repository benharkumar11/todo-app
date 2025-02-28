import React from "react";

function TaskItem({ task, index, deleteTask, moveTaskUp, moveTaskDown }) {
  return (
    <li>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        Delete
      </button>
      <button className="move-button" onClick={() => moveTaskUp(index)}>
        👆🏻
      </button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>
        👇🏻
      </button>
    </li>
  );
}

export default TaskItem;