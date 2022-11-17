import { Flex, Image, Text } from "@chakra-ui/react"

const SkillCard = ({imageURL, skillName})=>{
    return (<Flex
    flexDirection={"column"}
    cursor='pointer'
    alignItems="center"
    boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
    padding={"40px 20px 40px 20px"}
    w="200px"
  >
    <Image src={imageURL} h="65px"></Image>
    <Text fontWeight={"bold"}>{skillName}</Text>
  </Flex>)
}
export default SkillCard