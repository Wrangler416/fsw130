
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

export function getAllContacts(contacts) {
    return {
        type: "GET_ALL_CONTACTS",
        payload: contacts
    }
}


export default function contactReducer(contacts = [], action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return [...contacts,  action.payload]
        case "REMOVE_CONTACTS": {
            const newArr = contacts.filter(contact => contact !== action.payload)
            return newArr
        }
        case "GET_ALL_CONTACTS":
            return [...contacts]
        default: 
            return contacts

    }
}




