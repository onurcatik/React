import React from "react";

const MovieList = ({ data }) => {
  return (
    <div className="movieListContainer">
      <h2 className="movieListHeading">Movie List</h2>
      <div className="movieGrid">
        {data.map((movie, index) => (
          <div key={index} className="movieCard">
            <img src={movie.Poster} alt={movie.Title} className="movieImage" />
            <div className="movieDetails">
              <h3 className="movieTitle">{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <p>Runtime: {movie.Runtime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
