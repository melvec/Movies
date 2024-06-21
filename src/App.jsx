import "./App.css";
import { MainContainer } from "./components/MainContainer";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";

function App() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [wishlistOfMovies, setWishListOfMovies] = useState([]);

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
  const addMovieToWishlist = (movie) => {
    setWishListOfMovies([...wishlistOfMovies, movie]);
  };

  return (
    <>
      <Navbar wishlistOfMovies={wishlistOfMovies} />
      <MainContainer
        listOfMovies={listOfMovies}
        addMovieToWishlist={addMovieToWishlist}
      />
    </>
  );
}

export default App;
