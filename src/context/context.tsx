import React from "react"
import axios from "axios"

import {Job} from "../types/types"

export interface Context {
  state: {
    jobs: Job[]
    fullTime: boolean
    location: string
    page: string
  }
  actions: {
    changeFullTime: () => void
    changeLocation: (loc: string) => void
    changePage: () => void
  }
  viewStatus: {
    statusNow: boolean
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<boolean>(false)
  const [jobs, setJobs] = React.useState<Job[]>([])
  const [fullTime, setFullTime] = React.useState<boolean>(false)
  const [location, setLocation] = React.useState<string>("new+york")
  const [page, setPage] = React.useState<string>("first")

  const URL = "https://floating-tundra-32143.herokuapp.com/https://jobs.github.com/positions.json"

  const getData = async (url: string) => {
    try {
      const result = await axios.get(URL + url)

      setStatus(true)
      setJobs(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    if (status === false) {
      getData(`?location=${location}`)
    }
  })

  const changeFullTime = () => {
    setFullTime(!fullTime)
  }

  const changeLocation = (loc: string) => {
    setLocation(loc)
    setStatus(false)
  }

  const changePage = () => {
    if (page === "first") setPage("second")
    else setPage("first")
  }

  const state: Context["state"] = {
    jobs,
    fullTime,
    location,
    page,
  }

  const viewStatus = {
    statusNow: status,
  }

  const actions = {
    changeFullTime: changeFullTime,
    changeLocation: changeLocation,
    changePage: changePage,
  }

  return (
    <UserContext.Provider value={{state, viewStatus, actions}}>{children}</UserContext.Provider>
  )
}

export {UserContext as default, UserProvider as Provider}
