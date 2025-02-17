const express = require('express');
const router = express.Router();
const { checkAuth, checkAdmin } = require('../firebase/firebaseAuthMiddleware');
const { getAllRecipes, getFilterRecicpes, getincludeRecicpes, addRecipe, deleteRecipe, updateRecipe, addFavorite, getAllfavourite } = require("../controllers/recipeController");

router.get('/', getAllRecipes);
router.get('/filter', getFilterRecicpes);
router.get('/include', getincludeRecicpes);

// Only authenticated admins can add, delete, or update recipes
router.post('/add', checkAuth, checkAdmin, addRecipe);  
router.delete('/delete/:name', checkAuth, checkAdmin, deleteRecipe);  
router.put('/update/:name', checkAuth, checkAdmin, updateRecipe);

// Add favorite recipes (authenticated users only)
router.post('/favorite', checkAuth, addFavorite);
router.get('/userfav', getAllfavourite)

module.exports = router;
