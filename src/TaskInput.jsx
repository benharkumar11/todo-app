import React from "react";

function TaskInput({ newTask, handleInputChange, addTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        ADD
      </button>
    </div>
  );
}

export default TaskInput;