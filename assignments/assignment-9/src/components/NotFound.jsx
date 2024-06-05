import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="max-w-md w-full space-y-8 mt-10">
        <img
          className="mx-auto h-70 w-auto mt-5"
          src="images/PageNotFound.webp"
          alt="description"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
