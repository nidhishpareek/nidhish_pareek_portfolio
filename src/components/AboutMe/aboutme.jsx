import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MyHeading } from "../Heading/Heading";
import MyPhoto from "../../images/MyPhoto.png";
import { AboutMeContent } from "../../AboutMeContent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Box id="aboutme">
      <MyHeading text="About Me 🫠" style={{ marginBottom: "3rem" }} />
      <Flex
        width={"90%"}
        gap="30px"
        flexDirection={["column", "column", "row", "row"]}
        margin="auto"
        textAlign={"center"}
        alignItems="center"
        justifyContent={["center", "center", "space-between", "space-between"]}
      >
        <Flex>
          <Image
            src={MyPhoto}
            margin="auto"
            maxW="400px"
            borderRadius={"200px"}
            border="2px solid"
            data-aos={"flip-up"}
          />
        </Flex>
        <Box maxW={700} margin="auto" data-aos={"zoom-in"}>
          <Text textAlign={"justify"} mb="2px">
          <Text as={'span'}>My motto is </Text>
            <Text fontWeight={"bold"} as="span">
              Achieving Possimpable{" "}
            </Text>
              which means achieving the threshold where possible & impossible meet.
          </Text>
          {AboutMeContent &&
            AboutMeContent?.map((content, index) => (
              <Text textAlign={"justify"} key={index} mb="2px">
                {content}
              </Text>
            ))}
        </Box>
      </Flex>
    </Box>
  );
};
export default AboutMe;
