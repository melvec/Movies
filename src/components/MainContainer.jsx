import { MovieCard } from "./MovieCard";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";

export const MainContainer = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [wishlistOfMovies, setWishListOfMovies] = useState([]);
  const [activeLink, setActiveLink] = useState("Home");

  const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9c2cd60b2fmsh9fa849b9045ac80p18b1adjsn338368840f9c",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  const listMovies = async () => {
    try {
      const response = await fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.d);
          setListOfMovies(data.d);
        });
    } catch (error) {
      console.error(error);
    }
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

  return (
    <div>
      <Navbar
        wishlistOfMovies={wishlistOfMovies}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        handleNavClick={handleNavClick}
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
