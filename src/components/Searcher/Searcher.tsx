import * as React from "react"
import {Center, Text, HStack, Button, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {InfoOutlineIcon} from "@chakra-ui/icons"

import background from "../../assets/backgroundImg.png"

const Searcher: React.FC = () => {
  return (
    <Center
      backgroundImage={`url(${background})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="8px"
      h="150px"
      m="auto"
      p={2}
      w={["95%", "90%", "80%"]}
    >
      <HStack
        bg="#FFFFFF"
        borderRadius="4px"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
        h="55px"
        justify="space-between"
        p={[1, 2]}
        w={["85%", "70%"]}
      >
        <InputGroup h="55px" w="80%">
          <InputLeftElement color="#B9BDCF" h="100%" pointerEvents="none">
            <InfoOutlineIcon />
          </InputLeftElement>
          <Input
            h="100%"
            m="auto"
            mr="0"
            placeholder="Title, companies, expertise or benefits"
            w="95%"
          />
        </InputGroup>
        <Button
          _hover={{bg: "#075bbb"}}
          background="#1E86FF"
          borderRadius="4px"
          color="white"
          h="45px"
          w={["30%", "20%", "15%"]}
          transition="0.5s ease-in-out"
        >
          Search
        </Button>
      </HStack>
    </Center>
  )
}

export default Searcher
