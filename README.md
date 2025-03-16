# Instant Chef Backend

The backend for Instant Chef is built with **Node.js**, **Express.js**, and **MongoDB**, providing APIs for managing recipes, user favorites, and AI-powered cooking advice via a chatbot (Juniper).

## Live API Link
You can access the live API here: [Instant Chef Backend](https://instant-chef-api-1.onrender.com/)

## Features

- **Recipe Management**: APIs to add, update, delete, and filter recipes.
- **Favorite Recipes**: Allow users to save their favorite recipes.
- **AI Chatbot**: Interact with Juniper, an AI-powered assistant for recipe suggestions and cooking advice.
- **User Authentication**: Firebase authentication for secure access to user data and actions.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Firebase User Authentication
- **AI Assistant**: Juniper (AI-powered chatbot)

## Routes

- **GET `/recipes`**: Fetch all recipes from the database.
- **GET `/recipes/filter`**: Filter recipes based on the ingredients provided (OR logic).
- **GET `/recipes/include`**: Filter recipes based on the ingredients provided (AND logic).
- **POST `/recipes/add`**: Add a new recipe to the database. (Admin only)
- **DELETE `/recipes/delete/:name`**: Delete a recipe by name from the database. (Admin only)
- **PUT `/recipes/update/:name`**: Update an existing recipe by name. (Admin only)
- **POST `/recipes/favorite`**: Add a recipe to a user's favorites. (Authenticated users only)
- **GET `/recipes/userfav`**: Retrieve all favorite recipes for the authenticated user.
- **POST `/api/chat`**: Interact with Juniper, the AI-powered chatbot to get personalized recipe recommendations, ingredient suggestions, and real-time cooking advice.


## Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud)
- Firebase account and config setup

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MaskuraBegum/Instant_Chef_Api
