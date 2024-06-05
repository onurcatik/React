import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManager;
