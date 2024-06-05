import React, { useState } from "react";
import FormWizard from "./components/FormWizard";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        {submittedData ? (
          <ProfilePage formData={submittedData} />
        ) : (
          <FormWizard onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
};

export default App;