const mongoose = require('mongoose');

uri = "mongodb+srv://maskurabegum77:ZkTeIwzwQAOWKZqa@recipeapi.scvyx.mongodb.net/RecipeApi?retryWrites=true&w=majority&appName=RecipeApi";

const connectDb = ()=>{
    return mongoose.connect(uri,)
}