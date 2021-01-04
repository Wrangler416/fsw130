import React, {useState} from "react"
import {ThingsContextConsumer} from "./thingsContext"

const Things = () => {

    const root = document.getElementById("root")

    const thingData = [

        { id: 1, 
          title: "Thing One", 
          description: "Ugliest Boat", 
          url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
        }]

    const [things, setThings] = useState(thingData)

    const [newThing, setNewThing] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newURL, setNewURL] = useState("")

    const handleTitle = (e) => setNewThing(e.target.value)
    const handleDescription = (e) => setNewDescription(e.target.value)
    const handleURL = (e) => setNewURL(e.target.value)

    const addThing = (things) => {
        things.id = things.length + 1
        setThings([...things, things])
    }

    const deleteThing = (id) => {
        setThings(things.filter((things) => things.id !== id))
    }

    function addNewThing() {
        const h1 = document.createElement("h1")
        h1.textContent = newThing + "" + newDescription + "" + newURL
        root.appendChild(h1)
    }

    return (

        <ThingsContextConsumer>

            {context => (
                <div>
                     <h1>Thing List:</h1>
                        <br></br>
                    {things.map(things => 
                        (<h1>{things.title} {things.description} {things.url}</h1>))}

                    <button>Edit</button>
                    <button onClick={() => deleteThing(things.id)}>Delete</button>

                    <form className="form">
                        <input 
                            type="text"
                            name="newThing"
                            value={newThing}
                            placeholder="Title"
                            onChange={handleTitle}
                            >
                        </input>

                        <input 
                            type="text"
                            name="newDescription"
                            value={newDescription}
                            placeholder="Description"
                            onChange={handleDescription}
                            >
                        </input>

                        <input 
                            type="url"
                            name="newURL"
                            value={newURL}
                            placeholder="Add URL"
                            onChange={handleURL}
                            >
                        </input>


            </form>
            <button className="button" onClick={addNewThing}>Add your thing</button>
            </div>
            )}

        </ThingsContextConsumer>
    )
}

export default Things