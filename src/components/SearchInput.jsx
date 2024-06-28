import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = (props) => {
  const ref = useRef(null);
  const { onSearch } = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={30} placeholder="Search movies" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
