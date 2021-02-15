
const initialState = {
    Contacts: [    
{    
    name: "Steve Anderson",
    email: "anderman@gmail.com",
    cell: 5557779999,
    index: 1
},

{    
    name: "Mike Henders",
    email: "henders@gmail.com",
    cell: 5557772222,
    index: 2

},
{    
    name: "Deb Snow",
    email: "snow@gmail.com",
    cell: 5557779977,
    index: 3

},
{    
    name: "Chris Built",
    email: "built@gmail.com",
    cell: 5557779988,
    index: 4

}
        
    ]
}


export function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

export function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}


export function reducer(state = initialState, action) {
    switch(action.type) {
        
        case "ADD_CONTACT":
            return {
                ...state,
                Contacts: [...state.Contacts, action.payload]
            }
        case "REMOVE_CONTACT": {
            const arrCopy = [...state.Contacts]
                   const updatedArr = state.Contacts.filter(contact => contact !== action.payload)
            return {
                ...state,
                Contacts: updatedArr
            }
        }
        default:
            return state
    }
}


store.dispatch(addContact({name: "Joe Smith", email: "joe@aol.com", cell: 4569992324}))
store.dispatch(addContact({name: "Gary Wild", email: "wilder@aol.com", cell: 4769992345}))
store.dispatch(removeContact({name: "Joe Smith", email: "joe@aol.com", cell: 2345678909}))