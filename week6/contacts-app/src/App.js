import React from "react"
import {connect} from "react-redux"

function App(props) {    
    return (
        <div>
            <addContact />
        </div>
    )
}

export default connect()(App)

