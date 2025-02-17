const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favorites: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Recipe",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            Ingredients: {
                type: [String],
                required: true
            },
            category: {
                type: String,
                required: true
            },
            cookingTime: {
                type: Number,
                required: true
            },
            createdBy: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            instructions: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('User', FavoriteSchema)

