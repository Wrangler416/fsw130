import React, {Component} from "react"
import Movies from "./MoviesContext"

const {Provider, Consumer} = React.createContext()

class MoviesContextProvider extends Component {
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}
export {MoviesContextProvider, Consumer as MoviesContextConsumer}


