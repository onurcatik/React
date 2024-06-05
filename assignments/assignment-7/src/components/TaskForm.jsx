
import React, { useState, useEffect } from "react";

// TaskForm component allows users to input task details and add them to the task list.

const TaskForm = ({ addTask }) => {
  // State variables to store the title, description, and form validity
  const [title, setTitle] = useState(""); // State for task title
  const [description, setDescription] = useState(""); // State for task description
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  // Effect hook to run validation whenever title or description changes
  useEffect(() => {
    validateForm();
  }, [title, description]);

  // Event handler to update the title state when input changes
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Event handler to update the description state when input changes
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new task object with current title, description, and default completed status
    const newTask = {
      id: Date.now(), // Generate a unique ID based on current timestamp
      title,
      description,
      completed: false // New tasks are initially not completed
    };
    // Call the addTask function passed as props to add the new task
    addTask(newTask);
    // Clear the input fields after adding the task
    setTitle("");
    setDescription("");
  };

  // Function to validate the form based on title and description inputs
  const validateForm = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      // If both title and description are not empty, set form validity to true
      setIsFormValid(true);
    } else {
      // Otherwise, set form validity to false
      setIsFormValid(false);
    }
  };

  // Render the TaskForm component
  return (
    <div className="flex justify-center">
      <div className="mt-5 w-1/2 max-w-lg bg-white shadow-md rounded-md p-6">
        <form onSubmit={handleSubmit}>
          {/* Input field for task title */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter title"
            />
          </div>
          {/* Input field for task description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter description"
            />
          </div>
          {/* Button to submit the form */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid} // Disable button if form is invalid
              className={`py-2 px-4 rounded ${isFormValid
                  ? "bg-blue-500 text-white hover:bg-blue-600" // Apply blue color if form is valid
                  : "bg-gray-300 text-gray-600 cursor-not-allowed" // Otherwise, apply gray color and disable cursor
                } transition duration-300`}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
