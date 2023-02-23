//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('method-override');
app.use(methodOverride("_method"));
//.ENV
require('dotenv').config()

//MODELS

//STATIC FILES

//Express req.body
app.use(express.urlencoded({extended:true}));

//ROUTES