const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}

module.exports = {getAllRecipes, getFilterRecicpes};