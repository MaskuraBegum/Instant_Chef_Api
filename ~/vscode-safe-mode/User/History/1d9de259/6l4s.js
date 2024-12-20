require("dotenv").config;
const express = require('express')
const app = express();
const connectDb = require("./db/connect")

const PORT = process.env.PORT || 5000;

const recipes_route = require("./routes/recipeRoute");

app.get('/', (req, res) => {
    res.send('welcome to the server')
});

app.use('/recipes', recipes_route);

const start = async()=>{
    try{
        await connectDb(process.env.Mongodb_url);
        app.listen(PORT,()=>{
           console.log(`${PORT} yes i am connected`);
        });
    }
    catch(error){
        console.log(error)

    }
};
start();


// ZkTeIwzwQAOWKZqa
// maskurabegum77
// mongodb+srv://maskurabegum77:ZkTeIwzwQAOWKZqa@recipeapi.scvyx.mongodb.net/?retryWrites=true&w=majority&appName=RecipeApi