require("dotenv").config();
const express = require("express");
const { InferenceClient } = require("@huggingface/inference");


const router = express.Router();
const hf = new InferenceClient(process.env.HF_TOKEN, { provider: "hf-inference" });

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemPrompt = `
      You are a helpful AI chatbot specialized in cooking.
      - your name is Juniper  
      - For a recipe if a user ask any help with the instruction, help the user actively
      - If asked about a whole new recipes, be creative to provide step-by-step instructions. 
      - If a user asks about ingredient's alternative, suggest alternatives. 
      - Keep responses concise and friendly. 
      - If a question is off-topic, politely steer the conversation back to cooking.
      - Try to find if the current question is related to previous question or your previous answer; if so, answer with that context in mind.
      - Do not provide any link
    `;

    const chatCompletion = await hf.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct", // free-tier friendly, under 10B params
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 500,
    });

    const text = chatCompletion.choices[0].message.content;
    res.json({ reply: text });
  } catch (error) {
    console.error("Error in Hugging Face API:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;