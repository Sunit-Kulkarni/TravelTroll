const express = require('express');

const app = express();
const port = 3000;

//replacement for body-parser
app.use(express.json());

// sets the static folder for html/javascript/css/etc
app.use(express.static('public'));


//read http://localhost:3000/api/
app.get("/api", (req, res) => {
    res.json({get: "Route"})
})


//create http://localhost:3000/api/create
app.post("/api/create", (req,res) => {
    res.json({post: "Route"})
})

//update http://localhost:3000/api/1/edit
app.put("/api/:id/edit", (req,res) => {
    res.json({put: "Route"})
})
//delete http://localhost:3000/api/1/delete
app.delete('/api/:id/delete', (req,res) => {
    res.json({delete: "Route"})
})

app.listen(port, () => {
    console.log("Running on "+ port);
})