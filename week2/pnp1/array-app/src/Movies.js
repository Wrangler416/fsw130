import React, {createContext, useState} from "react"
import {MoviesContextConsumer} from "./MoviesContext"

const MoviesList = () => {
    const root = document.getElementById("root")

    const [movie, setMovie] = useState([
        {
            name: "Matrix",
            year: 1999, 
            id: 1
        },

        {
            name: "Wonder Woman",
            year: 2020, 
            id: 2
        },
        {
            name: "Super Intelligence",
            year: 2020, 
            id: 3
        },
        {
            name: "Inception",
            year: 1999, 
            id: 4
        },
    ])

    const [newMovie, setNewMovie] = useState("")
    const handleMovieChange = (e) => setNewMovie(e.target.value)

    function sendMovie() {
        const h1 = document.createElement("h1")
        h1.textContent = newMovie
        root.appendChild(h1)
  }
    return (

        <MoviesContextConsumer>
            {context => (
                <div className="body">
                    <h1>Movie List:</h1>
                    <br></br>
                {movie.map(movie => (
                    <h1>{movie.name} {movie.year}</h1>
                ))}
                    <h1 id="add">Add a Movie</h1>
                <form className="form">
                    <input 
                    className="newMovie"
                    type="text"
                    name="newMovie"
                    value={newMovie}
                    placeholder="Type your movie here"
                    onChange={handleMovieChange}
                    >
                    </input>

                </form>
                <button className="button" onClick={sendMovie}>Add your movie</button>
                </div>

            )}

        </MoviesContextConsumer>
    )}

export default MoviesList 