import { useState } from "react";
import NidhishDarkLogo from "../../images/removed bg image.png";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { animateScroll as scroll, Link } from "react-scroll";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Box bg={isDark ? "rgb(26,32,44)" : "white"}>
      <Flex zIndex={20} position="fixed" align="center">
        {/* Desktop */}
        <Flex
          position="fixed"
          left="1rem" top={'1rem'}
          align="center"
          display={["none", "none", "flex", "flex"]}
        >
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
            onClick={() => scroll.scrollToTop()}
          >
            {/* Nidhish */}
            <Image src={NidhishDarkLogo} height='30px'></Image>
          </Button>
        </Flex>
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link to="home">
              <Button //as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                w="100%"
              >
                Home
              </Button>
            </Link>

            <Link to="services">
              <Button
                // as="a"
                variant="ghost"
                aria-label="services"
                my={5}
                w="100%"
              >
                Services
              </Button>
            </Link>
            <Link to="portfolio">
              <Button
                // as="a"
                variant="ghost"
                aria-label="portfolio"
                my={5}
                w="100%"
              >
                Portfolio
              </Button>
            </Link>

            <Link to="contact">
              <Button
                //as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </Link>
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
          position="fixed"
          left="1rem"
          top={0}
          align="center"
          display={["flex", "flex", "none", "none"]}
        >
          <Button
            ////as="a"

            padding={0}
            variant="ghost"
            aria-label="Home"
            my={5}
            zIndex={30}
            w="100%"
            onClick={() => scroll.scrollToTop()}
          >
            <Image src={NidhishDarkLogo} height='30px'></Image>
          </Button>
        </Flex>
        
          <Flex
            w="100vw"
            display={display}
            bg={isDark ? "black" : "white"}
            zIndex={20}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
          >
            <Flex justify="flex-end">
              <IconButton
                mt={1}
                mr={2}
                aria-label="Open Menu"
                size="lg"
                variant={"ghost"}
                icon={
                  <>
                    <CloseIcon size="lg" mr={5} mt="5" />
                    <Switch
                      mt="5"
                      mr={2}
                      color="green"
                      isChecked={isDark}
                      onChange={toggleColorMode}
                    />
                  </>
                }
                onClick={() => changeDisplay("none")}
              />
            </Flex>

            <Flex flexDir="column" align="center">
              <Link to="home">
                <Button //as="a"
                  variant="ghost"
                  aria-label="Home"
                  my={5}
                  w="100%"
                >
                  Home
                </Button>
              </Link>

              <Link to="services">
                <Button
                  //as="a"
                  variant="ghost"
                  aria-label="services"
                  my={5}
                  w="100%"
                >
                  Services
                </Button>
              </Link>
              <Link to="portfolio">
                <Button
                  //as="a"
                  variant="ghost"
                  aria-label="portfolio"
                  my={5}
                  w="100%"
                >
                  Portfolio
                </Button>
              </Link>

              <Link to="contact">
                <Button //as="a"
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                >
                  Contact
                </Button>
              </Link>
              <Flex h={"prose"} w="100vw" bg={isDark ? "blackAlpha.300" : "whiteAlpha.50"}></Flex>
            </Flex>
          </Flex>
        </Flex>
    </Box>
  );
};
export default NavBar;
