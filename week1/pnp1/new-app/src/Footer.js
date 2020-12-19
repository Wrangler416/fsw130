import React, {useContext} from "react"
import ThemeContext from "./themeContext"
import "./project.css"


const Footer = () => {
    const themes = useContext(ThemeContext)
    return (
        <div style={themes}>
            <p id="foot">Learn React 2020</p>
        </div>
    )
}

export default Footer

