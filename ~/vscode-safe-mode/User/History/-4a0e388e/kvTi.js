const recipe = require("../models/recipeModel");
const User = require("../models/userModel");
const { checkAuth, checkAdmin } = require('../firebase/firebaseAuthMiddleware'); // Import middleware

const getAllRecipes = async(req,res)=>{
    const recipeData = await recipe.find(req.query)
    res.status(200).json({recipeData});
}
const getAllfavourite = async(req,res)=>{
  const userFav = await User.find(req.query)
  res.status(200).json({userFav});
}
const getFilterRecicpes = async(req, res) =>{
try{
    const { ingredients } = req.query;

    let filter = {};
    if (ingredients) {
      const ingredientList = ingredients.split(",").map((item) => item.trim());
      filter = {
        $or: ingredientList.map((ingredient) => ({
          Ingredients: { $regex: new RegExp(ingredient, "i") }, 
        })),
      };
    }
    const recipeData = await recipe.find(filter);

    res.status(200).json({recipeData});

}
catch(error){
    console.log(error)
}
}
const getincludeRecicpes = async(req, res) =>{
  try{
      const { ingredients } = req.query;
  
      let filter = {};
      if (ingredients) {
        const ingredientList = ingredients.split(",").map((item) => item.trim());
        filter = {
          $and: ingredientList.map((ingredient) => ({
            Ingredients: { $regex: new RegExp(ingredient, "i") }, 
          })),
        };
      }
      const recipeData = await recipe.find(filter);
  
      res.status(200).json({recipeData});
  
  }
  catch(error){
      console.log(error)
  }
  }


// Add Recipe (Admin Only)
const addRecipe = async (req, res) => {
  try {
    const { name, description, ingredients, instructions, cookingTime, category, image, createdBy } = req.body;

    // Check if all required fields are provided
    if (!name || !ingredients || !instructions || !createdBy) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new recipe object
    const newRecipe = new recipe({
      name,
      description,
      Ingredients: ingredients,
      instructions,
      cookingTime,
      category,
      image,
      createdBy
    });

    // Save the recipe to the database
    await newRecipe.save();

    res.status(201).json({ message: 'Recipe added successfully', newRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding recipe' });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { name } = req.params;  // Get recipe name from URL parameters
    const updatedData = req.body;

    // Find the recipe by name and update it
    const recipeToUpdate = await recipe.findOneAndUpdate(
      { name },  // Search for recipe by name
      updatedData,  // Update the recipe with the provided data
      { new: true }  // Return the updated recipe
    );

    if (!recipeToUpdate) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe updated successfully', recipeToUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating recipe' });
  }
};

// Delete Recipe (Admin Only) - Using name instead of id
const deleteRecipe = async (req, res) => {
  try {
    const { name } = req.params;  // Get recipe name from URL parameters

    // Find and delete the recipe by name
    const deletedRecipe = await recipe.findOneAndDelete({ name });

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting recipe' });
  }
};


// Add Favorite Recipes
const addFavorite = async (req, res) => {
  try {
    const { userId, recipeId, uemail } = req.body;
    console.log(recipeId);

    // Find user by Firebase userId
    let user = await User.findOne({ uid: userId });

    // If the user doesn't exist, create a new user with the first favorite
    if (!user) {
      user = new User({
        uid: userId,
        email: uemail,
        favorites: [recipeId], // Add the first favorite
      });
      await user.save(); // Save the new user with the first favorite
    } else {
      // If the user exists, just add the new recipeId to the favorites
      if (!user.favorites.includes(recipeId)) {
        user.favorites.push(recipeId);
        await user.save(); // Update the user document with the new favorite
      } else {
        return res.status(400).json({ message: "Recipe already in favorites" });
      }
    }

    // Return response with user email and updated favorites
    return res.status(200).json({
      message: "Recipe added to favorites",
      email: user.email,  // Include the user's email in the response
      favorites: user.favorites
    });
  } catch (error) {
    console.error("Error adding favorite:", error);
    return res.status(500).json({ message: "Server error" });
  }
};




module.exports = {
  getAllRecipes,
  getAllfavourite,
  getFilterRecicpes,
  getincludeRecicpes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  addFavorite
};

