const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true ,index: true},  // Store Firebase UID as String
    email: { type: String, required: true, unique: true },  // Store Firebase Email
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipe' }],  // Reference to Recipe model
});

module.exports = mongoose.model('User', userSchema);
