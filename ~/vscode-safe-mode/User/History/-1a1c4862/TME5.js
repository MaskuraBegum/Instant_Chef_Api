const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    }
});