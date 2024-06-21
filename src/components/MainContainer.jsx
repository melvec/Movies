import { MovieCard } from "./MovieCard";

export const MainContainer = ({ listOfMovies, addMovieToWishlist }) => {
  return (
    <div>
      <MovieCard
        listOfMovies={listOfMovies}
        addMovieToWishlist={addMovieToWishlist}
      />
    </div>
  );
};
