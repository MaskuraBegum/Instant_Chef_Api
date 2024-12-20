const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    mainIngredients:{
        type:[String],
        required:true,
    },
    otherIngredients:{
        type:[String],
        required:true,
    },
    instructions: {
        type: String,
        required: true,
      },
});