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
    cookingTime: {
        type: Number, // in minutes
        required: true,
    },
    category: {
        type: String, // "Dessert", "Breakfast", "Dinner"
        required: false,
    },
    image: {
        type: String, 
        required: false,
      },
    createdBy: {
        type: String, 
        required: true,
      }
});

module.exports = mongoose.model()