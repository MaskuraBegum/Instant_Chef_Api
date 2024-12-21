const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    const { ingredients } = req.query; 
    console.log("Request Query:", req.query); // Debugging

    let filter = {};
    if (ingredients) {
      // Parse ingredients from the query
      const ingredientList = ingredients.split(",").map((item) => item.trim());
      console.log("Parsed Ingredients:", ingredientList); // Debugging

      // Create the filter for MongoDB query
      filter = {
        Ingredients: {
            $all: ingredientList.map((ingredient) => ({
              $regex: new RegExp(`^${ingredient}$`, "i"), // Case-insensitive regex
            }));
      };
    }

    console.log("Filter applied:", filter); // Debugging

    // Query the database with the filter
    const recipeData = await recipe.find(filter);
    console.log("Filtered Recipes Found:", recipeData); // Debugging

    res.status(200).json({recipeData});
}

module.exports = {getAllRecipes, getFilterRecicpes};