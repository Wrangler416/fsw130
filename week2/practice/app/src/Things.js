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














// import React from "react"

// const Things = () => {
//     return (
//         <div>
//             <li className="thingsList"></li>
//             <h1>{things}</h1>
//             <button className="delete">Delete</button>
//             <button className="edit">Edit</button>
//         </div>
//     )
// }

// export default Things


























// import React, {useState, useContext} from "react"
// import {thingsContext} from "./thingsContext"


// const Things = () => {

//     const {things} = useContext(thingsContext)

//     const handleTitle = (e) => setNewThing(e.target.value)

//     const addThing = (things) => {
//         things.id = things.length + 1
//         setThings([...things, things])
//     }

//     const deleteThing = (id) => {
//         setThings(things.filter((things) => things.id !== id))
//     }

//     function addNewThing() {
//         const h1 = document.createElement("h1")
//         h1.textContent = newThing + "" + newDescription + "" + newURL
//         root.appendChild(h1)
//     }

//     return (

//         <thingsContext.Provider value={{}}>

//             {context => (
//                 <div>
//                      <h1>Thing List:</h1>
//                         <br></br>
//                     {things.map(things => 
//                         (<h1>{things.title} {things.description} {things.url}</h1>))}

//                     <button>Edit</button>
//                     <button onClick={() => deleteThing(things.id)}>Delete</button>

//                     <form className="form">
//                         <input 
//                             type="text"
//                             name="newThing"
//                             value={newThing}
//                             placeholder="Title"
//                             onChange={handleTitle}
//                             >
//                         </input>

//                         <input 
//                             type="text"
//                             name="newDescription"
//                             value={newDescription}
//                             placeholder="Description"
//                             onChange={handleDescription}
//                             >
//                         </input>

//                         <input 
//                             type="url"
//                             name="newURL"
//                             value={newURL}
//                             placeholder="Add URL"
//                             onChange={handleURL}
//                             >
//                         </input>


//             </form>
//             <button className="button" onClick={addNewThing}>Add your thing</button>
//             </div>
//             )}

//         </thingsContext.Provider>    
//     )
// }

// export default Things



//  // const thingData = [

//     //     { id: 1, 
//     //       title: "Thing One", 
//     //       description: "Ugliest Boat", 
//     //       url: "https://www.yachtforums.com/attachments/really-ugly-boat-jpeg.84747/"
//     //     }]



// // useEffect(() => {

// // })

// // function getData() {
// //     axios.get("https://api.vschool.io/karatemple2/todo")
  
// //     .then(response => createTweets(response.data))
// //     .catch(error => console.log(error))
// //   }