import React, { useContext, useState } from "react";
import { DataStoreContext } from "./DataStoreProvider";

const DataStoreApp = () => {
  const [inputValue, setInputValue] = useState("");
  const { data, addItem, removeItem } = useContext(DataStoreContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        text: inputValue,
      };
      addItem(newItem);
      setInputValue("");
    }
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <>
      <div className="data-store-app bg-blue-500 py-4 px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-Saltpan">
          DataStore App
        </h1>
        <div className="flex flex-col items-center mb-4">
          <div className="flex flex-col md:flex-row items-center mb-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter item"
              value={inputValue}
              onChange={handleInputChange}
              className="border border-gray-300 px-3 py-2 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500 w-full md:w-96"
            />
            <button
              onClick={handleAddItem}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-Amazon hover:text-TahunaSands focus:outline-none w-full md:w-auto"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
      <ul className="px-4 md:px-0">
        {data.map((item) => (
          <li
            key={item.id}
            className="container mx-auto bg-pink-200 p-3 flex flex-col md:flex-row justify-between items-center m-2 rounded-2xl"
          >
            <span className="w-full md:w-auto mb-2 md:mb-0">{item.text}</span>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="bg-red-500 text-white p-2 rounded-2xl hover:bg-red-400 hover:text-white focus:outline-none w-full md:w-auto"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataStoreApp;
