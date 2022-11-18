import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { MyHeading } from "../Heading/Heading";
import SkillCard from "./skillsCard";


const Skills = ({ skills }) => {
  // console.log(skills  )

  return ( 
    <>
      <MyHeading text="Skills 🤹" style={{ marginBottom: "3rem" }} />
      <Flex gap={"40px"} wrap="wrap" justifyContent={"center"}>
        {skills.map((element, index) => {
          return (
            <SkillCard
          
              animation={index%2 ==0?"fade-right":'fade-left'}
              key={index}
              imageURL={element.image}
              skillName={element.skill}
            />
          );
        })}
      </Flex>
    </>
  );
};
export default Skills;

{
  /* <Flex
flexDirection={"column"}
cursor='pointer'
alignItems="center"
boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
padding={"40px 20px 40px 20px"}
w="200px"
>
<Image src={HTML} h="65px"></Image>
<Text fontWeight={"bold"}>HTML</Text>
</Flex> */
}
