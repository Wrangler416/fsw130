import React from "react"
import ThingsList from "./ThingsList"
import thingsContextProvider from "./thingsContext"

function App() {
  return (
    <thingsContextProvider>
    <div>
      <ThingsList />
    </div>
    </thingsContextProvider>
  )
}
export default App 