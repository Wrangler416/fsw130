import React from "react"
import ThemeContext from "./themeContext"

function Button(props) {
    return (
        <ThemeContext.Consumer>
            {context => (
                <button onClick = {context.toggleTheme} className="button">Change Theme</button>
            )}
        </ThemeContext.Consumer>
    )
}
export default Button 