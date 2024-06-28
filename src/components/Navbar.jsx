import React, { useState } from "react";
import NavLink from "./NavLink";

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

const links = ["Home", "Wishlist"];

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { activeLink, handleNavClick } = props;

  return (
    <>
      <Box bg="black" px={4}>
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
                <NavLink
                  key={link}
                  onClick={() => handleNavClick(link)}
                  isActive={activeLink === link}
                >
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
                <NavLink
                  key={link}
                  onClick={() => handleNavClick(link)}
                  isActive={activeLink === link}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
