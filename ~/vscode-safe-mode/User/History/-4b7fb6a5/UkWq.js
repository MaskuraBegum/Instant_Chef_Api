const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firebaseUid: { type: String, required: true, unique: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
    }]
});

module.exports = mongoose.model('User', userSchema);