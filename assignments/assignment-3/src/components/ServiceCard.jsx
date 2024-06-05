import React from "react";
import { FaTree } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";

function ServiceCard({ image, text, paragraph, buttonLabel }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all duration-300 ease-in-out m-4 p-4 flex flex-col items-center">
      <img src={image} alt={text} className="rounded mb-4" />

      <h3 className="text-xl mb-2 text-center flex items-center">
        <FaTree className="mr-2" /> {text}
      </h3>

      <p className="mb-4 text-center flex items-center">{paragraph}</p>

      <button className="bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center">
        {buttonLabel} <GiFruitTree className="ml-2" />
      </button>
    </div>
  );
}

export default ServiceCard;
