//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('method-override');
app.use(methodOverride("_method"));
//.ENV
require('dotenv').config()

//MODELS

//STATIC FILES
app.use(express.static('public'));
//Express req.body
app.use(express.urlencoded({extended:true}));

//ROUTES

////new
// app.get('/fitness/new', (req,res)=> {
//     res.render('new.ejs')
// });

//seed
// app.get('/fitness/seed', (req,res)=> {
//     Fitness.create(FitnessData, (err, data) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log(data)
//     })
// });

//index
// app.get('/fitness', (req, res) => {
//     Fitness.find({}, (err, alldata) => {
//         res.render('index.ejs', {
//             fitness : alldata
//         });
//     });
// });

//Show
// app.get('/fitness/:id', (req,res) => {
//     Fitness.findById(req.params.id, (err, foundFitness) => {
//         res.render("show.ejs", {
//             fitness: foundFitness
//         });
//     });
// });

//Delete Route

//Edit Route

//Create Route

//Update route