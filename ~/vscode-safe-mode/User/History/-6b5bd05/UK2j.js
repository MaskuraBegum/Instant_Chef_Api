const express = require("express");
const OpenAI = require("openai"); 
require("dotenv").config();

const router = express.Router();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure your .env file has the key
});

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an AI chef. If a user asks about an ingredient, also provide alternatives." },
        { role: "user", content: message }
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
