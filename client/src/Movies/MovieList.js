import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const match = useRouteMatch(`/movies/:id`)

  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
