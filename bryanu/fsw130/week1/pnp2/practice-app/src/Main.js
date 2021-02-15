import React, {useContext} from "react"
import ThemeContext from "./themeContext"


const Main = () => {
    const themes = useContext(ThemeContext)
    return (

        <div style={themes}>
            <h2 id="main">How To Use Context In React</h2>

            <h3>React Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h3>

        </div>
    )
}

export default Main