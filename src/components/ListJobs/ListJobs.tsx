import * as React from "react"
import {Box, VStack, Spinner} from "@chakra-ui/react"

import {viewStatus, useJobs, fullTime} from "../../context/hooks"
import Job from "../JobOfList/JobOfList"

const ListJobs: React.FC = () => {
  const state = viewStatus()
  const jobs = useJobs()
  const fulltime = fullTime()

  return (
    <Box h="100" w="100%">
      {state === false && <Spinner mt="15%" />}
      {state === true && (
        <VStack>
          {!fulltime &&
            jobs.map((job) => {
              return <Job key={job.id} job={job} />
            })}
          {fulltime &&
            jobs
              .filter((job) => job.type === "Full Time")
              .map((job) => {
                return <Job key={job.id} job={job} />
              })}
        </VStack>
      )}
    </Box>
  )
}

export default ListJobs
