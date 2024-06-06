// components/DataStoreProvider.jsx
import React, { useState } from "react";

export const DataStoreContext = React.createContext();

const DataStoreProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addItem = (item) => {
    setData((prevData) => [...prevData, item]);
  };

  const removeItem = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  return (
    <DataStoreContext.Provider value={{ data, addItem, removeItem }}>
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
