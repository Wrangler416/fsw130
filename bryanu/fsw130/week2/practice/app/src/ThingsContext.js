
import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ThingsContextProvider extends Component {
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ThingsContextProvider, Consumer as ThingsContextConsumer}











