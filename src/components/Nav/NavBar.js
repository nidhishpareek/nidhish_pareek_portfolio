import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import NextLink from "next/link";
import { animateScroll as scroll } from "react-scroll";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex zIndex={20} position="fixed" align="center">
      <Flex position="fixed" top="1rem" left="1rem" align="center">
        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%" onClick={() => scroll.scrollToTop()}>
         
        </Button>
      </Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}

        <Flex display={["none", "none", "flex", "flex"]}>
          {/* <NextLink href="/" passHref> */}
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
          {/* </NextLink> */}

          {/* <NextLink href="/about" passHref> */}
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            Services
          </Button>
          {/* </NextLink> */}
          {/* <NextLink href="/about" passHref> */}
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            Portfolio
          </Button>
          {/* </NextLink> */}

          {/* <NextLink href="/contact" passHref> */}
          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            Contact
          </Button>
          {/* </NextLink> */}
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          variant="ghost"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bg={"blackAlpha.800"}
        zIndex={20}
        
        pos="fixed"
        top="0"
        left="0"
        
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {/* <NextLink href="/" passHref> */}
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
          {/* </NextLink> */}

          {/* <NextLink href="/about" passHref> */}
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            Services
          </Button>
          {/* </NextLink> */}
          {/* <NextLink href="/about" passHref> */}
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            Portfolio
          </Button>
          {/* </NextLink> */}

          {/* <NextLink href="/contact" passHref> */}
          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            Contact
          </Button>
          {/* </NextLink> */}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DarkModeSwitch;
