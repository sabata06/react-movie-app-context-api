import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default Main;
