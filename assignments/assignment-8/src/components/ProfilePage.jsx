import React from "react";

const ProfilePage = ({ formData }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 py-4 px-8 text-white">
        <ul className="flex justify-end gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Header */}
      <header className="bg-blue-200 py-8 px-8 text-center">
        <h1 className="text-3xl font-bold text-blue-800">
          Hello {formData.name} !
        </h1>
      </header>

      {/* Profile Data */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profile Image */}
          <div className="md:w-1/3">
            {formData.profileImage && (
              <div className="flex justify-center">
                <img
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="Profile"
                  className="w-64 h-64 rounded-full shadow-xl"
                />
              </div>
            )}
          </div>

          {/* Profile Details */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-5 text-center">
              Profile Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Personal Information
                </h3>
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Country:</strong> {formData.country}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Additional Information
                </h3>
                <p>
                  <strong>Interests:</strong> {formData.interests}
                </p>
                <p>
                  <strong>Comments:</strong> {formData.comments}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
