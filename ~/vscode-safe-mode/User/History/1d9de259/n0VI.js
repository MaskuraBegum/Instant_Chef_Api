const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000;

const recipes_route = require("./routes/recipeRoute");

app.get('/', (req, res) => {
    res.send('welcome to the server')
});

app.use('/recipes', recipes_route);

const start = async()=>{
    try{
        app.listen(PORT,()=>{
           console.log(`${PORT} yes i am connected`);
        });
    }
    catch(error){
        console.log(error)

    }
};
start();


ZkTeIwzwQAOWKZqa
maskurabegum77