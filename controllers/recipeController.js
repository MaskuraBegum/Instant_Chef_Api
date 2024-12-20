const recipe = require("../models/recipeModel")
const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find({})
    res.status(200).json({recipeData});
}

const getFilterRecicpes = async(req, res) =>{
    res.status(200).json({msg:"getting all filtered recipes"})
}

module.exports = {getAllRecipes, getFilterRecicpes};