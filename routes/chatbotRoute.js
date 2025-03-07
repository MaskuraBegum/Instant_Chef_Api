const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Define your chatbot's role and behavior
    const systemPrompt = `
      You are a helpful AI chatbot specialized in cooking.
      - your name is Juniper  
      - For a recipe if a user ask any help with the instruction, help the user actively
      - If asked about a whole new recipes, be creative to provide step-by-step instructions. 
      - If a user asks about ingredient's alternative, suggest alternatives. 
      - Keep responses concise and friendly. 
      - If a question is off-topic, politely steer the conversation back to cooking.
      - Try to find if the current question is realted to previous question or your previous anwer, if yes it is realted then answer the current question in basis of previous conversation
      - Do not provide any link
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const response = await model.generateContent([systemPrompt, message]);
    const text = response.response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error("Error in Gemini API:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
