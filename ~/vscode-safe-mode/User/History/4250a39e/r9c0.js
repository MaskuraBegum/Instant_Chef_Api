const express = require('express')
const router = express.Router();

const {getAllRecipes,getFilterRecicpes} = require("../controllers/recipeController")

router.get('/', getAllRecipes);
router.get('/filter', getFilterRecicpes);

module.exports = router;