const express = require('express')
const router = express.Router();

const {getAllRecipes,getFilterRecicpes, getincludeRecicpes} = require("../controllers/recipeController")

router.get('/', getAllRecipes);
router.get('/filter', getFilterRecicpes);
router.get('/include', getincludeRecicpes);

module.exports = router;