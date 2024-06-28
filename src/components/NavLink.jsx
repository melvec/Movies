import { Link } from "@chakra-ui/layout";

const NavLink = ({ children, isActive, onClick }) => (
  <Link
    px={4}
    py={3}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray",
    }}
    bg={isActive ? "gray.700" : "transparent"} // Conditionally set the background color
    color={isActive ? "white" : "gray.400"} // Conditionally set the text color
    href={"#"}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavLink;
