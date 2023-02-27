//DEPENDENCIES
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const Fitness = require('./models/fitnessSchema.js')
const FitnessData = require('./models/fitnessData.js')

const methodOverride = require('method-override');
app.use(methodOverride("_method"));

//.ENV
require('dotenv').config()

//MODELS

//STATIC FILES
app.use(express.static('public'));
//Express req.body
app.use(express.urlencoded({extended:true}));

//ROUTES

//new
app.get('/fitness/new', (req,res)=> {
    res.render('new.ejs')
});

// seed
app.get('/fitness/seed', (req,res)=> {
    Fitness.create(FitnessData, (err, data) => {
        if(err) {
            console.log(err)
        }
        console.log(data)
    })
});

// index
app.get('/fitness', (req, res) => {
    Fitness.find({}, (err, alldata) => {
        res.render('index.ejs', {
            fitness : alldata
        });
    });
});

// Show
app.get('/fitness/:id', (req,res) => {
    Fitness.findById(req.params.id, (err, foundWorkout) => {
        res.render("show.ejs", {
            fitness: foundWorkout
        });
    });
});

// Delete Route
app.delete('/fitness/:id', (req, res) => {
    Fitness.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/fitness');
    });
});

//Edit Route
app.get('/fitness/:id/edit', (req, res)=> {
    Fitness.findById(req.params.id, (error, foundWorkout) => {
        res.render("edit.ejs", {
            fitness: foundWorkout
        });
    });
});

//Create Route
app.post('/fitness', (req,res)=> {
    Fitness.create(req.body, (err, newWorkout)=> {
        res.redirect('/fitness')
    });
});

//Update route
app.put('/fitness/:id', (req, res)=> {
    Fitness.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWorkout) => {
        res.redirect('/fitness');
    });
});


app.listen(3000, () => {
    console.log('listening...');
});


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB, () => {
    console.log('The connection with mongo is established.');
});