import React from "react";
import { Box, Image, Text, Stack, Center, Button } from "@chakra-ui/react";

export const MovieCard = ({
  listOfMovies,
  toggleMovieToWishlist,
  wishlistOfMovies,
}) => {
  return (
    <Center>
      <Stack spacing={4} direction="row" wrap="wrap" justify="center">
        {listOfMovies && listOfMovies.length > 0 ? (
          listOfMovies.map((item) => (
            <Box
              key={item.id}
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="2"
              m="2"
              boxShadow="lg"
            >
              <Text>{item.id}</Text>
              <Image
                src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                alt={item.l}
                borderRadius="md"
                objectFit="contain" // Alternative value to cover
              />
              <Box p="2">
                {" "}
                <Box d="flex" alignItems="baseline">
                  <Text mt="1" fontWeight="semibold" as="h3">
                    {item.original_title}
                  </Text>
                </Box>
                <Button
                  mt="2"
                  colorScheme="teal"
                  onClick={() => toggleMovieToWishlist(item)}
                >
                  {wishlistOfMovies.find((movie) => movie.id === item.id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </Button>
              </Box>
            </Box>
          ))
        ) : (
          <Text fontSize="xl" color="gray.500">
            No movies found.
          </Text>
        )}
      </Stack>
    </Center>
  );
};
