import React from "react"
import ThingsList from "./Things"
import {ThingsContextProvider} from "./ThingsContext"

function App() {
  return (
    <div>
    <ThingsContextProvider>
    
      <ThingsList />
    
    </ThingsContextProvider>
    </div>
  )
}
export default App 