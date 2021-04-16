import * as React from "react"
import {HStack, Text} from "@chakra-ui/react"

import Searcher from "../Searcher/Searcher"

interface Props {
  type: "first" | "second"
}

const Header: React.FC<Props> = ({type}) => {
  return (
    <>
      <HStack m="auto" mb={["5%", "2%"]} mt={["5%", "2%"]} w={["95%", "90%", "80%"]}>
        <Text color="#282538" fontSize="24px" fontWeight="bold" lineHeight="36px">
          GitHub
        </Text>
        <Text color="#282538" fontSize="24px" lineHeight="36px">
          Jobs
        </Text>
      </HStack>
      {type === "first" && <Searcher />}
    </>
  )
}

export default Header
