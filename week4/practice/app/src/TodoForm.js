import React, {useState} from 'react'


function TodoForm(props) {

    const [input, setInput] = useState("")

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 2000),
            text: input
        })
        setInput("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input
            type="text"
            placeholder="add to do"
            value={input}
            name="text"
            onChange={handleChange}
            />

            <button>Add ToDo</button>

            </form>
        </div>
    )
}

export default TodoForm 