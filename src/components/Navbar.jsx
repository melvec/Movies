import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MovieCard } from "./MovieCard";

const links = ["Home", "Movies", "Wishlist"];

const NavLink = ({ children, onClick }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={"#"}
    onClick={onClick}
  >
    {children}
  </Link>
);

const Navbar = ({ wishlistOfMovies }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (link) => {
    setActiveLink(link);
    if (isOpen) onClose(); // Close the menu on small screens when a link is clicked
  };

  return (
    <>
      <Box bg="teal.800" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box color="white" fontWeight="bold" fontSize="lg">
              MyMovieApp
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <NavLink key={link} onClick={() => handleNavClick(link)}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link} onClick={() => handleNavClick(link)}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        {activeLink === "Wishlist" ? (
          wishlistOfMovies && wishlistOfMovies.length > 0 ? (
            <MovieCard listOfMovies={wishlistOfMovies} />
          ) : (
            <Text>No movies in wishlist.</Text>
          )
        ) : (
          <Text>{activeLink} Content </Text>
        )}
      </Box>
    </>
  );
};

export default Navbar;
