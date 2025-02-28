import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [
          updatedTasks[index - 1],
          updatedTasks[index],
        ];
        return updatedTasks;
      });
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        return updatedTasks;
      });
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <TaskInput
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
      <ol>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;