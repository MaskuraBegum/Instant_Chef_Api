require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require("./db/connect")

const PORT = process.env.PORT || 5000;

const recipes_route = require("./routes/recipeRoute");
const chatbot_route = require("./routes/chatbotRoute")

app.use(cors({
    origin: '*', // Allow requests from your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));
  
  // Body parser middleware to parse JSON data
  app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to the server')
});

app.use('/recipes', recipes_route);
app.use('/api', chatbot_route);

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


