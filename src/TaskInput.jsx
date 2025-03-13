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


// why do we need index as a bad bad practise for delete operation.?
// check how we a
// declare the state variable hee nad send that through the add task to the parent here