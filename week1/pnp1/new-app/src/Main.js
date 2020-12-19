import React, {useContext} from "react"
import ThemeContext from "./themeContext"


const Main = () => {
    const themes = useContext(ThemeContext)
    return (
        <div style={themes}>
            <h2 id="main">How To Use Context In React</h2>
            <h3>Declarative React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will 
            efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
                Component-Based Build encapsulated components that manage their own state, then compose them to make complex UIs.
            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
            Learn Once, Write Anywhere. We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting 
            existing code.
            React can also render on the server using Node and power mobile apps using React Native.</h3>
        </div>
    )
}

export default Main