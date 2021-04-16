import * as React from "react"
import {Stack, Box} from "@chakra-ui/react"

import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import JobDetails from "../../components/JobDetails"

const JobPage: React.FC = () => {
  return (
    <Box>
      <Header type="second" />
      <Stack direction={["column", "column", "row"]} m="auto" mt={10} w={["95%", "90%", "80%"]}>
        <Sidebar />
        <JobDetails />
        <Footer />
      </Stack>
    </Box>
  )
}

export default JobPage
