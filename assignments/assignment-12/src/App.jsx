import React from "react";
import DataStoreApp from "./components/DataStoreApp";
import DataStoreProvider from "./components/DataStoreProvider";

const App = () => {
  return (
    <DataStoreProvider>
      <DataStoreApp />
    </DataStoreProvider>
  );
};

export default App;
