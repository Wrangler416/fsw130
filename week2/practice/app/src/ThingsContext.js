
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













// import React, {createContext, useState} from "react"

// export const ThingsContext = createContext()


// const ThingsContext = (props) => {

//     const [things, setThing] = useState([

//         { id: 1, 
//           title: "Thing One", 
//           description: "Ugliest Boat", 
//           url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
//         }
//     ]);
  
//     return (
//        <ThingsContext.Provider value={things}>
//            {props.children}
//        </ThingsContext.Provider>
//       )
//     }
    
// export default ThingsContext