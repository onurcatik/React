import React from "react";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  const createCard = (task) => {
    return (
      <div
        key={task.id}
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 px-4 "
      >
        <div className="border border-gray-300 rounded p-4 bg-red-200">
          <h3 className="text-xl font-bold mb-2">{task.title}</h3>
          <p className="text-gray-600 mb-4">{task.description}</p>
          {task.completed ? (
            <p className="text-black-500 mb-4 text-xl font-bold">Completed ✔</p>
          ) : (
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => completeTask(task.id)}
                className="py-2 px-4 rounded bg-green-500 text-white hover:bg-green-600 transition duration-300"
              >
                Mark Completed
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="py-2 px-4 rounded bg-red-500 text-white hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-between mt-4 -mx-4">
      {tasks.length === 0 ? (
        <div className="w-full text-center">
          <div className="border border-gray-300 rounded p-4 bg-gray-100">
            <p className="text-xl font-bold text-gray-700">No tasks found.</p>
          </div>
        </div>
      ) : (
        tasks.map((task) => createCard(task))
      )}
    </div>
  );
};

export default TaskList;
