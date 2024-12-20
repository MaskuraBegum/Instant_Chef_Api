const express = require('express')
const router = express.Router();

router.get('/', getAllRecipes);
router.get('/filter', getFilterRecicpes);

module.exports = router;