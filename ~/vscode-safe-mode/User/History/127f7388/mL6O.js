require('dotenv').config();
const connectDb = require("./db/connect");
const recipe = require("./models/recipeModel");

const recipeJson = require("./recipes.json")

const start = async()=>{
    try{
        await connectDb(process.env.Mongodb_url);
        await recipe.create(recipeJson);

    }
    catch(error){
        console.log(error);
    }
}
start();