const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const port = 3000;

//initialize sequelize;
const sequelize = new Sequelize('postgres://cliff:@localhost:5432/traveltroll');

const User = sequelize.define('users', {
    user: {
        type: Sequelize.TEXT
    }
})

const Review = sequelize.define('review', {
    reviews: {
      type: Sequelize.TEXT
    },
    city: {
      type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.INTEGER
    }
});

Review.belongsTo(User);


//replacement for body-parser
app.use(express.json());

// sets the static folder for html/javascript/css/etc
app.use(express.static('public'));


//read http://localhost:3000/api/
app.get("/api", (req, res) => {
    Review.findAll({}).then((reviews) => {
        res.json(reviews);    
    })
    
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
User.sequelize.sync().then(() => {});
Review.sequelize.sync().then(() =>{});

app.listen(port, () => {
    console.log("Running on "+ port);
})
