import React, {useState, useEffect, useContext} from "react"
import ThemeContext from "./themeContext"
import {themes} from "./themeContext"
import Main from "./Main"
import "./index.css"


function App() {

  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = () => 
          theme === themes.dark
          ? setTheme(themes.light)
          : setTheme(themes.dark)
  
  
  return (
      <ThemeContext.Provider value={theme}>
          <button id="butt" onClick={toggleTheme}>Change Theme</button>
          <Main />
        
      </ThemeContext.Provider>
  )
  }
export default App
