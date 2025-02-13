require('dotenv').config();
const connectDb = require("./db/connect");
const recipe = require("./models/recipeModel");

const recipeJson = require("./recipes.json");

const start = async () => {
    try {
        await connectDb(process.env.Mongodb_url);

        // Loop through each item in the JSON file and upsert it
        for (const item of recipeJson) {
            await recipe.updateOne(
                { name: item.name }, // Match by unique field, e.g., 'name'
                { $set: item },      // Update fields in the database
                { upsert: true }     // Insert if no match is found
            );
        }

        console.log("Database updated successfully!");
    } catch (error) {
        console.error("Error updating database:", error);
    }
};
start();
