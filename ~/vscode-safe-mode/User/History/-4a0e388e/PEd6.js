const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    const { ingredients, category, cookingTime } = req.query; 
    const filter = {};
    if (ingredients) {
        const ingredientList = ingredients.split(",").map((item) => item.trim());
        filter.ingredients = { $all: ingredientList };
      }
      const recipeData = await recipe.find(filter);
    res.status(200).json({recipeData});
}

module.exports = {getAllRecipes, getFilterRecicpes};