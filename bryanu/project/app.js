const express = require("express");
const app = express();

const users = [
    {name: "John", age: 25},
    {name: "mary", age: 25},
    {name: "steve", age: 25},
    {name: "mike", age: 25}
];

const boats = [

    {name: "bavaria"},
    {name: "hylas"},
    {name: "oyster"},
    {name: "benteau"}
]

app.get("/users", (req, res) => {
    res.send(users);
})

app.get("/boats", (req, res) => {
    res.send(boats); 
})

app.listen(6000, () => {
    console.log("the server is running and running")
})