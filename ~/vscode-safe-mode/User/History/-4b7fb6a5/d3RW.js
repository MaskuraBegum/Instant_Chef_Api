const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },  // Firebase user ID
  email: { type: String, required: true, unique: true },
  favorites: [
    {
      recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }, // Store ID for reference
      name: String,
      description: String,
      ingredients: [String],
      instructions: String,
      cookingTime: Number,
      category: String,
      image: String
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
