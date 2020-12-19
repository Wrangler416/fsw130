import React, {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ThemeContext, {themes} from "./themeContext"
import "./project.css"

function App()  {
    const [theme, setTheme] = useState(themes.dark)
    const toggleTheme = () => 
            theme === themes.dark
            ? setTheme(themes.light)
            : setTheme(themes.dark)

        return (
            <ThemeContext.Provider value={theme}>
                <button id="butt" onClick={toggleTheme}>Change Theme</button>
                <Header /> 
                <Main />
                <Footer />
            </ThemeContext.Provider>
        )
    }
export default App 

