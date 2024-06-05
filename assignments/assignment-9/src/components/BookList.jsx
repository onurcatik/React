import React from "react";
import { books } from "../data";

const BookList = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-center">
                {book.title}
              </h3>
              <p className="text-center">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
