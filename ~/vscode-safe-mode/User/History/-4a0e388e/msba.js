const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    const { Ingredients } = req.query; 
    const filter = {};
    if (Ingredients) {
        const ingredientList = Ingredients.split(",").map((item) => item.trim());
        const filter = {
            Ingredients: { $all: ingredientList },
          };
      }
      const recipeData = await recipe.find(filter);
    res.status(200).json({recipeData});
}

module.exports = {getAllRecipes, getFilterRecicpes};