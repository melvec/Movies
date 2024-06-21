import React from "react";
import { Box, Image, Text, Stack, Center, Button } from "@chakra-ui/react";

export const MovieCard = ({ listOfMovies, addMovieToWishlist }) => {
  return (
    <Center>
      <Stack spacing={4} direction="row" wrap="wrap" justify="center">
        {listOfMovies && listOfMovies.length > 0 ? (
          listOfMovies.map((item) => (
            <Box
              key={item.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="6"
              m="4"
              boxShadow="lg"
            >
              <Image src={item.i.imageUrl} alt={item.l} borderRadius="md" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text
                    mt="1"
                    fontWeight="semibold"
                    as="h3"
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.l}
                  </Text>
                </Box>
                <Button
                  mt="2"
                  colorScheme="teal"
                  onClick={() => addMovieToWishlist(item)}
                >
                  Add to Wishlist
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
