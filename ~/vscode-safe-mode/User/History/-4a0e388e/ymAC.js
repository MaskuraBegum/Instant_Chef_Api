const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    const { Ingredients } = req.query; // Get ingredients from query
    const filter = {};

    if (Ingredients) {
      const ingredientList = Ingredients.split(",").map((item) => item.trim());
      console.log("Parsed Ingredients:", ingredientList); // Debugging: log parsed ingredients
      filter.Ingredients = { $all: ingredientList }; // Build filter for MongoDB query
    }

    console.log("Filter applied:", filter); // Debugging: log the filter

    const recipeData = await recipe.find(filter); // Perform the query
    console.log("Recipe data found:", recipeData);

    res.status(200).json({recipeData});
}

module.exports = {getAllRecipes, getFilterRecicpes};