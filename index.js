const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const port = 5432;

//initialize sequelize;
const sequelize = new Sequelize('postgres://localhost:5432/traveltroll');

//Creating user table with on field named user
const User = sequelize.define('users', {
    user: {
        type: Sequelize.TEXT
    }
})

//Creating Review tables to hold all review.
//Belongs to a user;
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
//Review belongs to user
Review.belongsTo(User);

User.sequelize.sync().then(() => {});
Review.sequelize.sync().then(() =>{});

//express replacement for body-parser
app.use(express.json());

// sets the static folder for html/javascript/css/etc
app.use(express.static('public'));


//read http://localhost:3000/api/
app.get("/api", (req, res) => {
    // Review.findAll({}).then((reviews) => {
    //     res.json(reviews);    
    // })  
    let reviews = [{
        user: 'kim',
        city: 'las vegas',
        country: 'usa',
        stars: 4,
        image: '',
        review: 'The food was delicious at Bacchanals.'
        },
    {
        user: 'cliff',
        city: 'maui',
        country: 'usa',
        stars: 5,
        image: '',
        review: 'I would avoid all volcanos.'
    }]
    res.json(reviews)
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
