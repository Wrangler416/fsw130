import React, {useContext} from "react"
import ThemeContext from "./themeContext"
import "./project.css"


const Header = () => {
    const themes = useContext(ThemeContext)
    return (
        <div style={themes}>
            <h1 id="nav">Home About Contact</h1>
        </div>
    )
}

export default Header