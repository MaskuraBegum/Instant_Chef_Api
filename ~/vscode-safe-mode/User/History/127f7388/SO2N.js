require('dotenv').config();
const connectDb = require("./db/connect");
const recipe = require("./models/recipeModel");

const recipeJson = require("./recipes.json")

const start = async()=>{
    try{
        await connectDb(uri);
        
    }
}