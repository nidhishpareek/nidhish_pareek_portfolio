import React from "react";

// SVG

import man from "../../images/undraw_developer_activity_re_39tg.svg";

// Animation

import { Link } from "react-scroll";
import { motion } from "framer-motion";

// CSS
import "./home.css";
import { Heading, Image, Text } from "@chakra-ui/react";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <Heading>Hi There, (^人^)</Heading>
        <Heading>I’m Nidhish Pareek</Heading>
        <Text>I am a MERN stack developer. </Text>
        <Link
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <Image src={man} zIndex={'1'} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
