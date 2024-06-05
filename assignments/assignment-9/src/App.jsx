import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookHome from "./components/BookHome";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookHome />} />
        <Route exact path="/books" element={<BookList />} />
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;