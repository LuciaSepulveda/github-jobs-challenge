import * as React from "react"
import {Box, VStack, Text, HStack, Center} from "@chakra-ui/react"
import {ArrowForwardIcon, TimeIcon} from "@chakra-ui/icons"
import {changePage} from "../../context/hooks"
import {Job} from "../../types/types"

interface Props {
  job: Job
}

const JobOfList: React.FC<Props> = ({job}) => {
  const dateActual = new Date()
  const goSecondPage = changePage()

  return (
    <HStack
      key={job.id}
      borderRadius="4px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
      h="120px"
      justify="space-between"
      w="90%"
      as="button"
      onClick={() => goSecondPage()}
    >
      <HStack w="90%">
        <Center
          backgroundImage={`url(${job.company_logo})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          h="90px"
          mr={2}
          p={5}
          w="90px"
        />
        <VStack h="115px" justify="space-around" w="100%">
          <Box w="100%">
            <Text
              color="#334680"
              fontSize={["10px", "12px"]}
              fontWeight="bold"
              lineHeight={["10px", "14px"]}
              textAlign="left"
              w="80%"
            >
              {job.company}
            </Text>
          </Box>
          <Box w="100%">
            <Text
              color="#334680"
              fontSize={["12px", "18px"]}
              lineHeight={["14px", "21px"]}
              textAlign="left"
            >
              {job.title}
            </Text>
          </Box>
          <Box w="90%">
            {job.type === "Full Time" && (
              <Text
                bg="white"
                border="1px solid #334680"
                borderRadius="4px"
                color="#334680"
                fontSize="12px"
                h="20px"
                lineHeight="14px"
                textAlign="center"
                w="63px"
              >
                Full time
              </Text>
            )}
          </Box>
        </VStack>
      </HStack>
      <HStack h="100%" minW="150px">
        <Box alignSelf="flex-end" p={2}>
          <Text color="#B9BDCF" fontSize="12px" fontWeight="500" lineHeight="14px">
            <ArrowForwardIcon />
            {job.location}
          </Text>
        </Box>
        <Box alignSelf="flex-end" p={2}>
          <Text color="#B7BCCE" fontSize="12px" fontWeight="500" lineHeight="14px">
            <TimeIcon />
            {" " +
              -1 *
                Math.round(
                  (new Date(job.created_at).getTime() - dateActual.getTime()) /
                    (1000 * 60 * 60 * 24),
                ) +
              " days ago"}
          </Text>
        </Box>
      </HStack>
    </HStack>
  )
}

export default JobOfList
