import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import ComponentWithError from "./components/ComponentWithError";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    </div>
  );
};

export default App;
