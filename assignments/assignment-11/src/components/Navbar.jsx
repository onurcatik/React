import React from "react";

class Navbar extends React.Component {
  render() {
    const { darkMode, toggleDarkMode } = this.props;

    return (
      <nav className={`bg-gray-100 ${darkMode ? "dark:bg-gray-800" : ""} py-4`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Pokemon Info</h2>
          <div className="flex items-end">
            <button
              id="darkModeToggle"
              className={`ml-4 px-3 py-2 rounded-md ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-200"
              } hover:bg-gray-300`}
              onClick={toggleDarkMode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm0 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
