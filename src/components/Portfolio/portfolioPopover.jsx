import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import "./portfolio.css";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";
import { Box, Flex } from "@chakra-ui/react";
export const PopoverElement = ({ item, index }) => {
  // console.log(item)
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex
      justifyContent="center"
      alignItems={"center"}
      flexWrap="wrap"
      className="intermediate"
      width={["100%", "100%", "50%", "50%"]}
    >
      <div
        width="fit-content"
        className="column"
        margin="auto"
        key={index}
        data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
      >
        <img src={item.image} alt={item.title} />
        <div className="overlay">
          <div className="left">
            <h3>{item.title}</h3>
          </div>
          <div className="right">
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faExternalLinkSquareAlt}
                size="2x"
                className="icon"
                title="Live view"
              />
            </a>
          </div>
        </div>
      </div>
      <Popover>
        <PopoverTrigger>
          <Button width={"90%"} variant="solid" colorScheme={"gray"}>
            Project Info
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight={"bold"}>
            <Flex alignContent={"baseline"}>
              <Flex>
                {item.repositoryUrl !== "private" ? (
                  <a href={item.repositoryUrl} target="_blank">
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Github Repo"
                    />
                  </a>
                ) : (
                  <a href="#_" target="_blank">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Private Repo"
                    />
                  </a>
                )}
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkSquareAlt}
                    size="2x"
                    className="icon"
                    title="Live view"
                  />
                </a>
              </Flex>
              <Box>{item.title} </Box>
            </Flex>
          </PopoverHeader>
          <PopoverBody>
            <Text>{item.tagline}</Text>
            <>
              {item.techStack ? (
                <>
                  <Text fontStyle={"italic"} textDecoration='underline'>Tech-Stack-</Text>
                  <Flex flexWrap={'wrap'} mt='10px' columnGap='10px' rowGap={'10px'}>
                    {item.techStack.map((tech)=>(<Box borderRadius={'5px'} paddingInline={'5px'} key={tech} bg={isDark? '#4A5568':'#CBD5E0'}> <Text >{tech}</Text>  </Box>))}
                  </Flex>
                </>
              ) : (
                ""
              )}
            </>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
//Git repo asdfjl;sdfjl;
// {
//   item.repositoryUrl !== "private" ? (
//     <a href={item.repositoryUrl} target="_blank">
//       <FontAwesomeIcon
//         icon={faGithubSquare}
//         size="2x"
//         className="icon"
//         style={{ marginRight: "0.3em" }}
//         title="Github Repo"
//       />
//     </a>
//   ) : (
//     <a href="#_" target="_blank">
//       <FontAwesomeIcon
//         icon={faUserLock}
//         size="2x"
//         className="icon"
//         style={{ marginRight: "0.3em" }}
//         title="Private Repo"
//       />
//     </a>
//   );
// }
