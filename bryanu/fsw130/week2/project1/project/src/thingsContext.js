import React, {createContext, useState} from "react"

export const thingsContext = createContext()


const ThingsProvider = (props) => {

    const [things, setThings] = useState([

        { id: 1, 
          title: "Thing One", 
          description: "Ugliest Boat", 
          url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
        }
    ]);
  
    return (
       <thingsContext.Provider value={things}>
           {props.children}
       </thingsContext.Provider>
      )
    }
    
export default ThingsProvider