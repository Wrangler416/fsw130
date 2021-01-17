import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
 const [contacts, setContacts]= useState("")

 useEffect(() => {
   axios 
   .get("https://api.vschool.io/karatemple2/todo/")
   .then(response => setContacts(response.data))
 }, [])

  return (
    <div>
       {contacts}
    </div>
  )
}

export default App 