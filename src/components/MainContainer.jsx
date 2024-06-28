import { MovieCard } from "./MovieCard";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";
import axios from "axios";

export const MainContainer = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [wishlistOfMovies, setWishListOfMovies] = useState([]);
  const [activeLink, setActiveLink] = useState("Home");

  //const url = "https://api.themoviedb.org/3/movie/550?api_key=232488e1aca100b2294166929b663be6"
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=232488e1aca100b2294166929b663be6",
    params: { page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzI0ODhlMWFjYTEwMGIyMjk0MTY2OTI5YjY2M2JlNiIsIm5iZiI6MTcxOTU3ODgwMy41ODg0MDQsInN1YiI6IjY2NzU1Yzk5OTI5Njg4NzYyZTViNDBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yJ7KiLwhHtAjZW_48r6mWYrHxh7uxzaAKUoa-C6_HJ4",
    },
  };

  const listMovies = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setListOfMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    listMovies();
  }, []);

  // Function to add movies to wishlist
  const toggleMovieToWishlist = (movie) => {
    if (wishlistOfMovies.some((item) => item.id === movie.id)) {
      setWishListOfMovies(
        wishlistOfMovies.filter((item) => item.id !== movie.id)
      );
    } else {
      setWishListOfMovies([...wishlistOfMovies, movie]);
    }
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const onSearch = async (movie) => {
    console.log(movie);
  };

  return (
    <div>
      <Navbar
        wishlistOfMovies={wishlistOfMovies}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleNavClick={handleNavClick}
        onSearch={onSearch}
      />
      {activeLink === "Home" && (
        <MovieCard
          listOfMovies={listOfMovies}
          toggleMovieToWishlist={toggleMovieToWishlist}
          wishlistOfMovies={wishlistOfMovies}
        />
      )}

      {activeLink === "Wishlist" ? (
        wishlistOfMovies && wishlistOfMovies.length > 0 ? (
          <MovieCard
            listOfMovies={wishlistOfMovies}
            toggleMovieToWishlist={toggleMovieToWishlist}
            wishlistOfMovies={wishlistOfMovies}
          />
        ) : (
          <Text>No movies in wishlist.</Text>
        )
      ) : (
        <Text>{activeLink} Content </Text>
      )}
    </div>
  );
};
