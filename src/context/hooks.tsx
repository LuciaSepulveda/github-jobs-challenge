import React from "react"

import UserContext, {Context} from "./context"

export function useJobs(): Context["state"]["jobs"] {
  const {
    state: {jobs},
  } = React.useContext(UserContext)

  return jobs
}

export function viewStatus(): Context["viewStatus"]["statusNow"] {
  const {
    viewStatus: {statusNow},
  } = React.useContext(UserContext)

  return statusNow
}

export function changeFullTime(): Context["actions"]["changeFullTime"] {
  const {
    actions: {changeFullTime},
  } = React.useContext(UserContext)

  return changeFullTime
}

export function fullTime(): Context["state"]["fullTime"] {
  const {
    state: {fullTime},
  } = React.useContext(UserContext)

  return fullTime
}

export function location(): Context["state"]["location"] {
  const {
    state: {location},
  } = React.useContext(UserContext)

  return location
}

export function changeLocation(): Context["actions"]["changeLocation"] {
  const {
    actions: {changeLocation},
  } = React.useContext(UserContext)

  return changeLocation
}

export function page(): Context["state"]["page"] {
  const {
    state: {page},
  } = React.useContext(UserContext)

  return page
}

export function changePage(): Context["actions"]["changePage"] {
  const {
    actions: {changePage},
  } = React.useContext(UserContext)

  return changePage
}
