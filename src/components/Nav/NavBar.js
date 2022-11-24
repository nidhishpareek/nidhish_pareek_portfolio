import { useState } from "react";
import NidhishDarkLogo from "../../images/NidhishDarkLogo1.png";
import NidhishLightLogo from "../../images/NidhishLightLogo.png";
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
import {resume_link} from "../../ResumeLink"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { animateScroll as scroll, Link } from "react-scroll";
import NavTag from "./NavTag";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      zIndex={20}
      background={isDark ? "rgb(26,32,44)" : "white"}
      borderBottom={isDark ? "1px solid black " : "1px solid #dee3de"}
      top="0px"
      width={"100vw"}
      position="fixed"
      height={["60px", "60px", "100px", "100px"]}
      align="center"
    >
      {/* Desktop */}
      <Flex
        position="fixed"
        left="1rem"
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
          <Image
            src={isDark ? NidhishDarkLogo : NidhishLightLogo}
            height="70px"
          ></Image>
        </Button>
      </Flex>

      <Flex position="fixed" right="1rem" align="center" top={0}>
        <Flex display={["none", "none", "flex", "flex"]}>
          <NavTag to="home" name="Home" />
          <NavTag to="aboutme" name="About" />
          <NavTag to="services" name="Services" />
          <NavTag to="portfolio" name="Portfolio" />
          <NavTag to="contact" name="Contact" />
          <a href={resume_link}>
            <Button
              variant="ghost"
              aria-label="services"
              my={5}
              mx="2"
              mr="25px"
              style={{
                background: "transparent",
                border: "2px solid red",
                color: "red",
              }}
            >
              Resume
            </Button>
          </a>
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
      {/* Logo */}
      <Flex align={"center"}>
        <Flex
          position="fixed"
          left="1rem"
          top={0}
          align="center"
          display={["flex", "flex", "none", "none"]}
        >
          <Button
            padding={0}
            variant="ghost"
            aria-label="Home"
            margin="0"
            my={'5px'}
            zIndex={30}
            w="100%"
            onClick={() => scroll.scrollToTop()}
          >
            <Image
              src={isDark ? NidhishDarkLogo : NidhishLightLogo}
              height="50px"
            ></Image>
          </Button>
        </Flex>

        <Flex
          w="100vw"
          display={display}
          borderBottom={"1px solid black"}
          bg={isDark ? "black" : "white"}
          zIndex={20}
          pos="fixed"
          top="2px"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={0}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              variant={"ghost"}
              icon={
                <>
                  <CloseIcon size="lg" mr={5} />
                  <Switch
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
          <NavTag to="home" name="Home" onClick={() => changeDisplay("none")} />
          <NavTag
            to="aboutme"
            name="About"
            onClick={() => changeDisplay("none")}
          />
          <NavTag
            to="services"
            name="Services"
            onClick={() => changeDisplay("none")}
          />
          <NavTag
            to="portfolio"
            name="Portfolio"
            onClick={() => changeDisplay("none")}
          />
          <NavTag
            to="contact"
            name="Contact"
            onClick={() => changeDisplay("none")}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default NavBar;
