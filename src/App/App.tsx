import {Box, VStack, Text, Img, HStack} from "@chakra-ui/react"
import * as React from "react"

import {Job} from "../types/types"
import FirstPage from "../pages/FirstPage/FirstPage"
import ListJobs from "../components/ListJobs"
import {page} from "../context/hooks"
import JobPage from "../pages/JobPage/JobPage"

const App: React.FC = () => {
  const pageActual = page()

  return (
    <Box bg="var(--background)" h="100vh" w="100%">
      {pageActual === "first" && <FirstPage />}
      {pageActual === "second" && <JobPage />}
    </Box>
  )
}

export default App
