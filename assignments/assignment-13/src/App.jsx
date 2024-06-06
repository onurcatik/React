import React from "react";
import withDataFetching from "./components/withDataFetching";
import MovieList from "./components/MovieList";
import "./styles.css";

// API URL for data fetching
const API_URL =
  "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";

const MovieListWithData = withDataFetching(MovieList, API_URL);

const App = () => {
  return (
    <div>
      <MovieListWithData />
    </div>
  );
};

export default App;
