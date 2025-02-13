require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require("./db/connect")

const PORT = process.env.PORT || 5000;

const recipes_route = require("./routes/recipeRoute");

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));
  
  // Body parser middleware to parse JSON data
  app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to the server')
});

app.use('/recipes', recipes_route);

const start = async()=>{
    try{
        await connectDb(process.env.Mongodb_url);
        
        app.listen(PORT,()=>{
           console.log(`server running on ${PORT}`);
        });
    }
    catch(error){
        console.log(error)

    }
};
start();


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