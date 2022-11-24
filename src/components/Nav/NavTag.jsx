import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

const NavTag = ({ to, name }) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        aria-label="services"
        my={5}
        w="100%"
        _hover={{
                background: "transparent",
                // border: "1px solid red",
                color: "red",
              }}
      >
        {name}
      </Button>
    </Link>
  );
};
export default NavTag