import * as React from "react"
import {HStack, Text} from "@chakra-ui/react"

const Footer: React.FC = () => {
  return (
    <HStack bottom="5" left="0" position="fixed" w="100%">
      <Text color="#B9BDCF" fontSize="14px" fontWeight="500" lineHeight="17px" m="auto">
        Created by{" "}
        <a
          href="http://github.com/LuciaSepulveda"
          style={{textDecoration: "underline", fontWeight: "bold"}}
        >
          Lucia Sepulveda
        </a>{" "}
        - devChallenges.io
      </Text>
    </HStack>
  )
}

export default Footer
