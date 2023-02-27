const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
    title: String,
    img: String,
    date: String,
    duration: Number,
    difficulty: Number,
    tags: [String]
}, { timestamps: true }); 

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;