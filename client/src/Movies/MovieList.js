import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies, movieWasEdited }) {
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} movieWasEdited={movieWasEdited} />
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
