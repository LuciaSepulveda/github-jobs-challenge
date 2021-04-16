import * as React from "react"
import {
  Box,
  Checkbox,
  VStack,
  Text,
  Input,
  InputGroup,
  Radio,
  InputLeftElement,
  RadioGroup,
} from "@chakra-ui/react"
import {InfoOutlineIcon} from "@chakra-ui/icons"

import {changeFullTime, fullTime, changeLocation, location} from "../../context/hooks"

const Sidebar: React.FC = () => {
  const change = changeFullTime()
  const fulltime = fullTime()
  const actualLocation = location()
  const newLocation = changeLocation()
  const [option, setOption] = React.useState<string>("3")

  React.useEffect(() => {
    if (option === "1") newLocation("london")
    if (option === "2") newLocation("amsterdam")
    if (option === "3") newLocation("new+york")
    if (option === "4") newLocation("berlin")
  }, [option, newLocation])

  return (
    <VStack>
      <Checkbox defaultChecked={fulltime} w="100%" onChange={() => change()}>
        <Text color="#334680" fontSize="14px" fontWeight="500" lineHeight="21px">
          Full time
        </Text>
      </Checkbox>
      <Box w="100%">
        <Text color="#B9BDCF" fontSize="14px" fontWeight="bold" lineHeight="21px" textAlign="left">
          LOCATION
        </Text>
      </Box>
      <InputGroup h="48px" w="100%">
        <InputLeftElement color="#B9BDCF" h="100%" pointerEvents="none">
          <InfoOutlineIcon />
        </InputLeftElement>
        <Input h="100%" m="auto" mr="0" placeholder="City, state, zip code or country" w="95%" />
      </InputGroup>
      <RadioGroup alignSelf="left" color="#334680" value={option} onChange={setOption}>
        <VStack alignItems="left" textAlign="left">
          <Radio value="1">London</Radio>
          <Radio value="2">Amsterdam</Radio>
          <Radio value="3">New York</Radio>
          <Radio value="4">Berlin</Radio>
        </VStack>
      </RadioGroup>
    </VStack>
  )
}

export default Sidebar
