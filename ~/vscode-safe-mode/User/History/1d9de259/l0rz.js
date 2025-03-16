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
    res.send(`
        <h1>Welcome to the Instant Chef API</h1>
        <p>This is a web-based platform designed to help you discover personalized recipes based on ingredients you have.</p>
        <h3>Available API Routes:</h3>
        <ul>
            <li><strong>GET /recipes</strong> - Fetch all recipes</li>
            <li><strong>GET /recipes/filter</strong> - Filter recipes based on provided ingredients (OR logic)</li>
            <li><strong>GET /recipes/include</strong> - Filter recipes based on provided ingredients (AND logic)</li>
            <li><strong>POST /recipes/add</strong> - Add a new recipe to the database (Admin only)</li>
            <li><strong>DELETE /recipes/delete/:name</strong> - Delete a recipe by name (Admin only)</li>
            <li><strong>PUT /recipes/update/:name</strong> - Update a recipe by name (Admin only)</li>
            <li><strong>POST /recipes/favorite</strong> - Add a recipe to a user's favorites (User must be authenticated)</li>
            <li><strong>GET /recipes/userfav</strong> - Get a user's favorite recipes (User must be authenticated)</li>
            <li><strong>POST /api/chat</strong> - Interact with the AI-powered Juniper chatbot for recipe recommendations and cooking advice</li>
        </ul>
    `);
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


