import * as React from "react"
import {Stack, Box} from "@chakra-ui/react"

import ListJobs from "../../components/ListJobs/ListJobs"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from "../../components/Footer"

const FirstPage: React.FC = () => {
  return (
    <>
      <Header type="first" />
      <Stack direction={["column", "column", "row"]} m="auto" mt={10} w={["95%", "90%", "80%"]}>
        <Sidebar />
        <ListJobs />
        <Footer />
      </Stack>
    </>
  )
}

export default FirstPage
