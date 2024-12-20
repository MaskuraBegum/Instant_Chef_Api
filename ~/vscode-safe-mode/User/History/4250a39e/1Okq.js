const express = require('express')
const router = express.Router();

const {getAllRecipes,getFilterRecicpes} = require(../controllers)

router.get('/', getAllRecipes);
router.get('/filter', getFilterRecicpes);

module.exports = router;