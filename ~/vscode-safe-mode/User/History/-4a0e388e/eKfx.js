const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    const { Ingredients } = req.query;
    const filter = {};

    if (Ingredients) {
      // Parse ingredients into an array
      const ingredientList = Ingredients.split(",").map((item) => item.trim());
      // Update the filter to search for recipes containing all ingredients
      filter.Ingredients = { $all: ingredientList };
    }

    // Query the database with the filter
    const recipeData = await recipe.find(filter);

    res.status(200).json({recipeData});
}

module.exports = {getAllRecipes, getFilterRecicpes};