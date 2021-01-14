import React, {createContext, useState} from "react"
import {ThingsContextConsumer} from "./ThingsContext"

const ThingsList = () => {
    const root = document.getElementById("root")

    const [things, setThings] = useState([
        { id: 1, 
          title: "Thing One", 
          description: "Ugliest Boat", 
          url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
        },
        { id: 2, 
            title: "Thing Two", 
            description: "Ugliest ", 
            url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
        },
        { id: 3, 
            title: "Thing Three", 
            description: "Ugliest ", 
            url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
        }
    ])

    const [newThing, setNewThing] = useState("")
    const handleThingChange = (e) => setNewThing(e.target.value)

    function sendThing() {
        const h1 = document.createElement("h1")
        h1.textContent = newThing
        root.appendChild(h1)
  }
    return (

        <ThingsContextConsumer>
            {context => (

                <div className="body">
                    <h1>Ugly Thing List:</h1>
                    <br></br>
                {things.map(things => (
                    <h1>{things.title} {things.description}{things.url}</h1>
                ))}
                    <h1 id="add">Add an Ugly Thing</h1>

                <form className="form">
                    <input 
                    className="newThing"
                    type="text"
                    name="newThing"
                    value={newThing}
                    placeholder="Type your thing here"
                    onChange={handleThingChange}
                    >
                    </input>
                </form>
                
                <button className="button" onClick={sendThing}>Add your thing</button>
                </div>

            )}

        </ThingsContextConsumer>
    )}

export default ThingsList 












