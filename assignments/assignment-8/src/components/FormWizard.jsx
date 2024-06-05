import React, { useState } from "react";

const FormWizard = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    interests: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const countryOptions = ["Türkiye", "Canada", "USA", "UK", "Germany"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-lightBlue-400">
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${
                formData.name ? "bg-blue-100" : "border-gray-300"
              }`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${
                formData.email ? "bg-blue-100" : "border-gray-300"
              }`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block mb-2 font-medium text-gray-800"
            >
              Country
            </label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${
                formData.country ? "bg-blue-100" : "border-gray-300"
              }`}
              required
            >
              <option value="">Select Country</option>
              {countryOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="interests"
              className="block mb-2 font-medium text-gray-800"
            >
              Interests
            </label>
            <input
              type="text"
              name="interests"
              id="interests"
              placeholder="Enter your interests"
              value={formData.interests}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${
                formData.interests ? "bg-blue-100" : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="comments"
              className="block mb-2 font-medium text-gray-800"
            >
              Additional Comments
            </label>
            <textarea
              name="comments"
              id="comments"
              placeholder="Enter additional comments"
              value={formData.comments}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${
                formData.comments ? "bg-blue-200" : "border-gray-300"
              }`}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="profileImage"
              className="block mb-2 font-medium text-gray-800"
            >
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="profileImage"
              id="profileImage"
              onChange={handleFileInputChange}
              className="focus:outline-none appearance-none bg-transparent border-none text-gray-700 w-full py-2 px-4 leading-tight rounded-md shadow-sm hover:bg-gray-100 focus:bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWizard;